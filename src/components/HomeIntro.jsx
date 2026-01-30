// src/components/HomeIntro.jsx
import { Link } from "react-router-dom";
import "./HomeIntro.css"; // Importamos los estilos del hero

const HomeIntro = () => {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center">
      <div className="content text-white">
        <h1 className="fw-bold mb-4">Nouveau Parfum</h1>
        <p className="lead mb-4">
          La esencia de la elegancia y la sofisticación.  
          Descubrí fragancias únicas, accesorios y mas en un entorno digital moderno.
        </p>
        {/* Ahora el botón apunta a /category */}
        <Link to="/category" className="btn btn-primary-nouveau btn-lg">
          Ver catálogo
        </Link>
      </div>
    </section>
  );
};

export default HomeIntro;