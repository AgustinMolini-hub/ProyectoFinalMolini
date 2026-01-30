const Footer = () => {
  return (
    <footer className="custom-footer text-center py-4">
      {/* Nombre del proyecto */}
      <h5 className="fw-bold mb-3">Nouveau Parfum</h5>

      {/* Redes sociales */}
      <div className="footer-socials mb-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>

      {/* Texto de cierre */}
      <p className="mb-0">
        © {new Date().getFullYear()} Nouveau Parfum – Proyecto académico desarrollado por Agustín con React.
      </p>
    </footer>
  );
};

export default Footer;