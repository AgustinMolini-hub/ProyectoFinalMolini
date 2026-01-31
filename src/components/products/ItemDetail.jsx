import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <p className="text-center text-purple fw-bold">
        Producto no disponible
      </p>
    );
  }

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true); //  cambia el estado para ocultar ItemCount
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          {/* Imagen del producto */}
          <div className="col-md-6">
            <img
              src={product.imageURL}
              alt={product.name}
              className="img-fluid rounded-start"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Información del producto */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
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

              {/* Renderizado condicional */}
              {!added ? (
                <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
              ) : (
                <div className="d-flex justify-content-center gap-3">
                  <Link to="/cart" className="btn btn-dark">
                    Ir al carrito
                  </Link>
                  <Link to="/catalogo" className="btn btn-outline-dark">
                    Seguir comprando
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
