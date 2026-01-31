import { Link } from "react-router-dom";
import "./ProductCard.css"; // Importamos los estilos específicos de la card

const ProductCard = ({ product }) => {
  return (
    <div className="card text-center">
      {/* Imagen del producto */}
      <img
        src={product.image}
        className="product-thumb"
        alt={product.name}
      />

      {/* Logo de la marca en el recuadro superior */}
      {product.brand && (
        <img
          src={`/logos/${product.brand}.png`}
          alt={`${product.brand} logo`}
          className="brand-logo-top"
        />
      )}

      {/* Contenido textual */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>

        {/* Descripción limitada */}
        <p className="card-description">{product.description}</p>

        {/* Precio */}
        <p className="card-text text-purple fw-bold">${product.price}</p>

        {/* Botón de detalle */}
        <Link to={`/item/${product.id}`} className="btn btn-dark w-100">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
