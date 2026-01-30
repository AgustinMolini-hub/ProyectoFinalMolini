import { formatPrice } from "../utils/formatPrice";

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="text-purple fw-bold mb-1">{item.name}</h5>
          <p className="mb-1">Cantidad: {item.quantity}</p>
          <p className="mb-0 fw-bold">
            Precio: {formatPrice(item.price)} {/*  helper aplicado */}
          </p>
        </div>
        <button
          onClick={() => removeItem(item.id)}
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;