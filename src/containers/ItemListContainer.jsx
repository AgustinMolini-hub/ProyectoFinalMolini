import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "/Components/ItemList";
import { getProducts } from "../services/products";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      if (categoryId) {
        setProducts(res.filter((prod) => prod.category === categoryId));
      } else {
        setProducts(res);
      }
    });
  }, [categoryId]);

  return (
    <div className="container mt-4">
      {greeting && <h2>{greeting}</h2>}
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;