import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="btn btn-primary-nouveau position-relative">
      🛒 Carrito
      {totalItems > 0 && (
        <span className="badge bg-light text-purple position-absolute top-0 start-100 translate-middle">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;