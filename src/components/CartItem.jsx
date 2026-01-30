const CartItem = ({ item, removeItem }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span>
        {item.name} x {item.quantity}
      </span>
      <span>${item.price * item.quantity}</span>
      <button
        onClick={() => removeItem(item.id)}
        className="btn btn-secondary-nouveau"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;