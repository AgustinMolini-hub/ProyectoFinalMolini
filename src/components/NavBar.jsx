import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Nouveau Parfum</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/perfumes">Perfumes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/velas">Velas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;