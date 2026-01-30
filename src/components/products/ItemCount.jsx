import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const handleIncrease = () => {
    if (count < stock) {
      const newValue = count + 1;
      setCount(newValue);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      const newValue = count - 1;
      setCount(newValue);
    }
  };

  const handleAddToCart = () => {
    onAdd(count); // pasa la cantidad al padre (ItemDetail)
    setAdded(true); // oculta el contador y muestra opciones
  };

  if (added) {
    return (
      <div className="d-flex flex-column align-items-center gap-3 mt-3">
        <p className="text-purple fw-bold">Producto agregado al carrito ✅</p>
        <a href="/cart" className="btn btn-primary-nouveau">
          Ir al carrito
        </a>
        <a href="/" className="btn btn-secondary-nouveau">
          Seguir comprando
        </a>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button
          className="btn btn-secondary-nouveau"
          onClick={handleDecrease}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="fw-bold text-purple">{count}</span>
        <button
          className="btn btn-secondary-nouveau"
          onClick={handleIncrease}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-primary-nouveau mt-3"
        onClick={handleAddToCart}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;