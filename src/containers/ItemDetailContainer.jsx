import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";
import ItemDetail from "../components/products/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId).then((res) => {
      console.log("Producto traído de Firestore:", res); //  agregado para depurar
      setProduct(res);
      setLoading(false);
    });
  }, [itemId]);

  return (
    <div className="container mt-4 text-center">
      {loading ? (
        <div className="spinner-border text-purple" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      ) : product ? (
        product.stock === 0 ? (
          <h2 className="text-danger fw-bold">Producto sin stock</h2>
        ) : (
          <ItemDetail product={product} />
        )
      ) : (
        <h2 className="text-danger fw-bold">Producto no encontrado</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;