import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  // carrito vacío
  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2 className="text-purple fw-bold">Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary-nouveau mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  // carrito con productos
  return (
    <div className="container my-5">
      <h2 className="text-purple fw-bold mb-4">Tu carrito</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}

      <h4 className="text-purple mt-3">
        Total: {formatPrice(totalPrice())}
      </h4>

      <div className="mt-3 d-flex gap-3">
        <button
          onClick={clearCart}
          className="btn btn-outline-danger"
          aria-label="Vaciar carrito"
        >
          Vaciar carrito
        </button>
        <Link
          to="/checkout"
          className="btn btn-primary-nouveau"
          aria-label="Finalizar compra"
        >
          Finalizar compra
        </Link>
        <Link
          to="/"
          className="btn btn-outline-dark"
          aria-label="Seguir comprando"
        >
          Seguir comprando
        </Link>
      </div>
    </div>
  );
};

export default Cart;
