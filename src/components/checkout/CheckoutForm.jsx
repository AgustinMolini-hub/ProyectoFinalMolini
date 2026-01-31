import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null); // limpiar error al escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email !== form.confirmEmail) {
      setError("Los correos electrónicos no coinciden");
      return;
    }

    if (form.phone.length < 8) {
      setError("El teléfono debe tener al menos 8 dígitos");
      return;
    }

    onConfirm({
      name: form.name,
      email: form.email,
      phone: form.phone,
    });

    // limpiar formulario
    setForm({ name: "", email: "", confirmEmail: "", phone: "" });
  };

  const isFormValid =
    form.name &&
    form.email &&
    form.confirmEmail &&
    form.phone &&
    form.email === form.confirmEmail;

  return (
    <form onSubmit={handleSubmit} className="container my-5">
      <h2 className="text-purple fw-bold mb-4">Finalizar compra</h2>

      <label htmlFor="name" className="fw-bold text-purple">Nombre completo</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Nombre completo"
        value={form.name}
        onChange={handleChange}
        className="form-control mb-3"
        required
        aria-label="Nombre completo"
      />

      <label htmlFor="email" className="fw-bold text-purple">Correo electrónico</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="form-control mb-3"
        required
        aria-label="Correo electrónico"
      />

      <label htmlFor="confirmEmail" className="fw-bold text-purple">Confirmar correo electrónico</label>
      <input
        type="email"
        id="confirmEmail"
        name="confirmEmail"
        placeholder="Repite tu correo electrónico"
        value={form.confirmEmail}
        onChange={handleChange}
        className="form-control mb-1"
        required
        aria-label="Confirmar correo electrónico"
      />

      <label htmlFor="phone" className="fw-bold text-purple">Teléfono</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        className="form-control mb-3"
        required
        aria-label="Teléfono"
      />

      {error && <p className="text-danger fw-bold">{error}</p>}

      <button
        type="submit"
        className="btn btn-primary-nouveau"
        disabled={!isFormValid}
        aria-label="Confirmar compra"
      >
        Confirmar compra
      </button>
    </form>
  );
};

export default CheckoutForm;
