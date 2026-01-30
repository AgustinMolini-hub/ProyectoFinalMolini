export const formatPrice = (price) => {
  if (typeof price !== "number") return ""; //  evita errores si llega algo raro
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2, //  asegura siempre dos decimales
  }).format(price);
};