import { Link } from "react-router-dom";
import "./ProductCard.css"; // Importamos los estilos de la tarjeta

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-sm mb-4">
      {/* Imagen del producto */}
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />

      {/* Contenido */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text text-purple fw-bold">${product.price}</p>

        {/* Botón para ver detalle */}
        <Link to={`/item/${product.id}`} className="btn btn-dark w-100">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;