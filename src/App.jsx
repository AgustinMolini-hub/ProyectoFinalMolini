import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import HomeIntro from "./components/HomeIntro"; // importamos el nuevo componente

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          {/* Inicio con introducción */}
          <Route path="/" element={<HomeIntro />} />

          {/* Catálogo completo (sin categoría) */}
          <Route path="/category" element={<ItemListContainer />} />

          {/* Catálogo filtrado por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          {/* Detalle de producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* Carrito */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;