import ProductCard from "./ProductCard";

function ItemList({ products }) {
  return (
    <div className="row">
      {products.map((prod) => (
        <div key={prod.id} className="col-md-4">
          <ProductCard product={prod} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;