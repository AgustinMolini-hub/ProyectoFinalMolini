import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList"; // ✅ corregido
import { getProducts } from "../services/products";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId).then((res) => setProducts(res));
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;