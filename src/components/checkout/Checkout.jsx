import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { collection, addDoc, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [finalTotal, setFinalTotal] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false); // estado para el spinner

  const handleConfirm = async (userData) => {
    const total = totalPrice();
    setLoading(true); // activar spinner

    try {
      // Validar stock antes de generar la orden
      for (const item of cart) {
        const productRef = doc(db, "products", item.id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
          setErrorMsg(`El producto ${item.name} no existe en la base de datos.`);
          setLoading(false);
          return;
        }

        const productData = snapshot.data();
        if (item.quantity > productData.stock) {
          setErrorMsg(`Stock insuficiente para ${item.name}. Disponible: ${productData.stock}`);
          setLoading(false);
          return;
        }
      }

      // Si todo está OK, generar la orden
      const order = {
        buyer: userData,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total,
        date: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      setFinalTotal(total);

      // Descontar stock de cada producto comprado
      for (const item of cart) {
        const productRef = doc(db, "products", item.id);
        const snapshot = await getDoc(productRef);
        const productData = snapshot.data();

        await updateDoc(productRef, {
          stock: productData.stock - item.quantity,
        });
      }

      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
      setErrorMsg("Ocurrió un error al procesar tu compra. Intenta nuevamente.");
    } finally {
      setLoading(false); // desactivar spinner
    }
  };

  // Validación: carrito vacío
  if (cart.length === 0 && !orderId) {
    return (
      <div className="container my-5 text-center">
        <h2 className="text-purple fw-bold">Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary-nouveau mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-purple" role="status">
            <span className="visually-hidden">Procesando compra...</span>
          </div>
          <p className="mt-3 fw-bold text-purple">Procesando tu orden, por favor espera...</p>
        </div>
      ) : orderId ? (
        <div className="text-center">
          <h2 className="text-purple fw-bold">¡Gracias por tu compra!</h2>
          <p>Tu número de orden es: <strong>{orderId}</strong></p>
          <p className="fw-bold text-purple">
            Total pagado: {formatPrice(finalTotal)}
          </p>
          <Link to="/" className="btn btn-primary-nouveau mt-3">
            Volver al catálogo
          </Link>
        </div>
      ) : (
        <>
          {errorMsg && <p className="text-danger fw-bold text-center">{errorMsg}</p>}
          <CheckoutForm onConfirm={handleConfirm} />
        </>
      )}
    </div>
  );
};

export default Checkout;