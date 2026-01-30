import { Link } from "react-router-dom";
import "./ProductCard.css"; // Importamos los estilos de la tarjeta

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-sm mb-4 h-100 d-flex flex-column text-center">
      {/* Imagen del producto */}
      <div className="d-flex align-items-center justify-content-center p-3">
        <img
          src={product.image}
          className="product-thumb" // 👈 usamos la clase definida en app.css
          alt={product.name}
        />
      </div>

      {/* Contenido */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-purple fw-bold">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text text-purple fw-bold">${product.price}</p>

        {/* Botón para ver detalle */}
        <div className="mt-auto">
          <Link to={`/item/${product.id}`} className="btn btn-dark w-100">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;