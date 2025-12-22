import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Categoría: {product.category}</p>
        <ItemCount />
      </div>
    </div>
  );
}

export default ItemDetail;