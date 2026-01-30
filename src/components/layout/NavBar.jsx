import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../cart/CartWidget";
import { getProducts } from "../../services/products";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      const uniqueCategories = [...new Set(products.map((p) => p.category.toLowerCase()))];
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold" to="/">
          Nouveau Parfum
        </Link>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links dinámicos */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom text-white" to="/">
                Inicio
              </NavLink>
            </li>
            {categories.map((cat) => (
              <li key={cat} className="nav-item">
                <NavLink
                  className="nav-link nav-link-custom text-white"
                  to={`/category/${cat}`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;