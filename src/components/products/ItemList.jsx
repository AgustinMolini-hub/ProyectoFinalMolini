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
    <div className="container my-5 d-flex justify-content-center">
      <div className="d-flex justify-content-center align-items-start gap-4" role="list">
        {products.map((prod) => (
          <div key={prod.id} role="listitem">
            <ProductCard product={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;