import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false); //  estado para mostrar confirmación

  if (!product) {
    return (
      <p className="text-center text-purple fw-bold">
        Producto no disponible
      </p>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true); // 👈 activamos el mensaje
    setTimeout(() => setAdded(false), 2000); //  se oculta después de 2 segundos
  };

  return (
    <div className="container my-5">
      <div className="card card-lila shadow-lg">
        <div className="card-body text-center">
          <h2 className="card-title text-purple fw-bold mb-3">
            {product.name}
          </h2>
          <p className="card-text mb-3">{product.description}</p>
          <p className="card-text mb-2">
            <strong className="text-purple">Categoría:</strong>{" "}
            {product.category}
          </p>
          <p className="card-text fw-bold text-purple mb-4">
            Precio: {formatPrice(product.price)}
          </p>

          {/* Selector de cantidad */}
          <ItemCount value={quantity} onChange={setQuantity} />

          {/* Botón de acción */}
          <button
            onClick={handleAdd}
            className="btn btn-primary-nouveau mt-4"
          >
            Agregar al carrito
          </button>

          {/* Mensaje de confirmación */}
          {added && (
            <p className="text-success fw-bold mt-3">
              Producto agregado al carrito
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;