import ProductCard from "../home/ProductCard";

function ItemList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-purple fw-bold">
        No hay productos para mostrar
      </p>
    );
  }

  return (
    <div className="row" role="list">
      {products.map((prod) => (
        <div key={prod.id} className="col-md-4" role="listitem">
          <ProductCard product={prod} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;