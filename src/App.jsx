// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Contexto
import { CartProvider } from "./context/CartContext";

// Layout
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import NotFound from "./components/layout/NotFound";

// Home
import HomeIntro from "./components/home/HomeIntro.jsx";

// Catálogo
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

// Carrito
import Cart from "./components/cart/Cart";

// Checkout
import Checkout from "./components/checkout/Checkout";

// 🎨 Importa primero las variables y luego los estilos globales
import "./variables.css";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        {/* Inicio con introducción */}
        <Route
          path="/"
          element={
            <main className="main-home">
              <HomeIntro />
            </main>
          }
        />

        {/* Catálogo completo */}
        <Route
          path="/catalogo"
          element={
            <main>
              <ItemListContainer />
            </main>
          }
        />

        {/* Catálogo filtrado por categoría */}
        <Route
          path="/category/:categoryId"
          element={
            <main>
              <ItemListContainer />
            </main>
          }
        />

        {/* Detalle de producto */}
        <Route
          path="/item/:itemId"
          element={
            <main>
              <ItemDetailContainer />
            </main>
          }
        />

        {/* Carrito */}
        <Route
          path="/cart"
          element={
            <main>
              <Cart />
            </main>
          }
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <main>
              <Checkout />
            </main>
          }
        />

        {/* Página 404 */}
        <Route
          path="*"
          element={
            <main>
              <NotFound />
            </main>
          }
        />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
