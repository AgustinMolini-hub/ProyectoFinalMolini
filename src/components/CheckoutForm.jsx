import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(form); 
  };

  return (
    <form onSubmit={handleSubmit} className="container my-5">
      <h2 className="text-purple fw-bold mb-4">Finalizar compra</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={form.name}
        onChange={handleChange}
        className="form-control mb-3"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="form-control mb-3"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        className="form-control mb-3"
        required
      />

      <button type="submit" className="btn btn-primary-nouveau">
        Confirmar compra
      </button>
    </form>
  );
};

export default CheckoutForm;