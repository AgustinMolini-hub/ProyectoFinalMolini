const products = [
  { id: "1", name: "Perfume A", category: "perfumes", description: "Fragancia floral elegante" },
  { id: "2", name: "Vela B", category: "velas", description: "Aroma relajante de lavanda" },
  { id: "3", name: "Accesorio C", category: "accesorios", description: "Estuche de lujo para perfumes" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === id)), 1000);
  });
};