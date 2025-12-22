import { useState } from "react";

function ItemCount({ initial = 1, stock = 10 }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrease} className="btn btn-outline-dark">-</button>
      <span className="mx-2">{count}</span>
      <button onClick={increase} className="btn btn-outline-dark">+</button>
      <button className="btn btn-dark ms-3">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;