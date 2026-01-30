import { Link } from "react-router-dom";

// Función para formatear el precio en pesos argentinos
const formatPrice = (price) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(price);

const Item = ({ product }) => {
  return (
    <div className="card h-100 text-center">
      {/* Imagen del producto */}
      <div className="d-flex align-items-center justify-content-center p-3">
        <img
          src={product.img}
          alt={product.name}
          className="card-img-top product-thumb"
        />
      </div>

      {/* Contenido de la card */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-purple fw-bold">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <strong>Precio:</strong> {formatPrice(product.price)}
        </p>

        {/* Botón de detalle */}
        <div className="mt-auto">
          <Link to={`/item/${product.id}`} className="btn btn-dark w-100">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;