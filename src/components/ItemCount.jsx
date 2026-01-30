import { useState } from "react";

const ItemCount = ({ value = 1, onChange }) => {
  const [count, setCount] = useState(value);

  const handleIncrease = () => {
    const newValue = count + 1;
    setCount(newValue);
    onChange(newValue); //  actualiza el estado en ItemDetail
  };

  const handleDecrease = () => {
    if (count > 1) {
      const newValue = count - 1;
      setCount(newValue);
      onChange(newValue); //  actualiza el estado en ItemDetail
    }
  };

  return (
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
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;