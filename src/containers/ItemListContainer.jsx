import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/products";
import ItemList from "../components/products/ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // activa loader cada vez que cambia la categoría
    getProducts().then((res) => {
      if (categoryId) {
        // filtrar por categoría específica
        const filtered = res.filter(
          (p) => p.category.toLowerCase() === categoryId.toLowerCase()
        );
        setProducts(filtered);
      } else {
        // sin categoría → mostrar todos
        setProducts(res);
      }
      setLoading(false); // desactiva loader cuando termina
    });
  }, [categoryId]);

  // Loader mientras se cargan productos
  if (loading) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-purple" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Mensaje si no hay productos
  if (products.length === 0) {
    return (
      <div className="container text-center my-5">
        <h2 className="text-purple fw-bold">No hay productos disponibles</h2>
      </div>
    );
  }

  // Render normal con productos
  return (
    <div className="container mt-4">
      {greeting && <h2 className="mb-4">{greeting}</h2>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;