export const formatDate = (date) => {
  const fechaNueva = new Date(date);
  const opciones = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
}