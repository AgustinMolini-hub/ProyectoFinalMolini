import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice"; //  importamos el helper

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleConfirm = async (userData) => {
    const order = {
      buyer: userData,
      items: cart,
      total: totalPrice,
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  return (
    <div className="container my-5">
      {orderId ? (
        <div className="text-center">
          <h2 className="text-purple fw-bold">¡Gracias por tu compra!</h2>
          <p>
            Tu número de orden es: <strong>{orderId}</strong>
          </p>
          <p className="fw-bold text-purple">
            Total pagado: {formatPrice(totalPrice)} {/*  helper aplicado */}
          </p>
          <Link to="/" className="btn btn-primary-nouveau mt-3">
            Volver al catálogo
          </Link>
        </div>
      ) : (
        <CheckoutForm onConfirm={handleConfirm} />
      )}
    </div>
  );
};

export default Checkout;