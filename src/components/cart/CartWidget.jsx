import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="btn btn-dark position-relative cart-widget-btn d-flex align-items-center gap-2"
      aria-label="Ver carrito"
      title="Carrito"
    >
      {/* Ícono del carrito */}
      <i className="bi bi-cart-fill fs-5"></i>
      <span className="fw-bold">Carrito</span>

      {/* Badge con cantidad de productos */}
      {totalItems() > 0 && (
        <span className="badge bg-danger rounded-pill cart-badge position-absolute top-0 start-100 translate-middle">
          {totalItems()}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
