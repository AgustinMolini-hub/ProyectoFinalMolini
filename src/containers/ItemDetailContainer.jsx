import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getProductById } from "../services/products"; // ✅ correcto

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then((res) => setProduct(res));
  }, [itemId]);

  return (
    <div className="container mt-4">
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;