import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container text-center my-5">
    <h2 className="text-purple fw-bold mb-3">404 - Página no encontrada</h2>
    <p className="mb-4">
      La ruta que intentaste acceder no existe o fue movida.
    </p>
    <Link to="/" className="btn btn-primary-nouveau">
      Volver al inicio
    </Link>
  </div>
);

export default NotFound;