// src/components/home/HomeIntro.jsx
import { Link } from "react-router-dom";
import "./HomeIntro.css"; // Importamos los estilos del hero

const HomeIntro = () => {
  return (
    <>
      {/* Hero principal */}
      <section className="hero text-center">
        <div className="content">
          <h1 className="fw-bold mb-4">Elegancia que se lleva puesta</h1>
          <p className="lead mb-4">
            Perfumes de lujo y gafas Ray‑Ban, seleccionados para quienes buscan
            sofisticación, estilo y autenticidad en cada detalle.
          </p>
          {/* Botón corregido: ahora va a /catalogo */}
          <Link to="/catalogo" className="btn btn-primary-nouveau btn-lg">
            Explorar catálogo
          </Link>
        </div>
      </section>

      {/* Sección introductoria */}
      <section className="about text-center">
        <div className="about-content">
          <h2 className="fw-bold mb-3">Quiénes somos</h2>
          <p className="mb-4">
            Desde 2010 trabajamos para ofrecer una experiencia única en el mundo
            de la moda y la perfumería. Nuestro compromiso es acercarte productos
            originales y de calidad, combinando tradición y tendencias modernas.
          </p>
          <p className="mb-4">
            Creemos que cada detalle cuenta: una fragancia que deja huella, unas
            gafas que definen tu estilo. Por eso seleccionamos cuidadosamente
            cada artículo para que tu compra sea tan especial como vos.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeIntro;
