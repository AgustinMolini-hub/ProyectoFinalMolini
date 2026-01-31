import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count); // pasa la cantidad al padre (ItemDetail)
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3 mt-4">
      {/* Controles de cantidad */}
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button
          className="btn btn-outline-dark"
          onClick={handleDecrease}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="fw-bold text-purple fs-5">{count}</span>
        <button
          className="btn btn-outline-dark"
          onClick={handleIncrease}
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      {/* Botón agregar */}
      <button
        className="btn btn-dark w-100 mt-3"
        onClick={handleAddToCart}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>

      {/* Mensaje si no hay stock */}
      {stock === 0 && (
        <p className="text-danger fw-bold mt-2">
          Producto sin stock disponible
        </p>
      )}
    </div>
  );
};

export default ItemCount;
