import { createContext, useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addItem = (item, quantity) => {
    const existingItem = cart.find((prod) => prod.id === item.id);

    if (existingItem) {
      // Si ya existe, sumamos la cantidad
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      // Si no existe, lo agregamos
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar producto por ID
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Calcular precio total
  const totalPrice = () =>
    cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  // Calcular cantidad total de items
  const totalItems = () =>
    cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalPrice, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};