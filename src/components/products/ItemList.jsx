import ProductCard from "../home/ProductCard";
import "./ItemList.css"; // 👈 Importamos los estilos del grid

function ItemList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-purple fw-bold">
        No hay productos para mostrar
      </p>
    );
  }

  return (
    <div className="products-grid">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ItemList;
