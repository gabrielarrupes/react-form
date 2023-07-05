import "./style.css";
import openEye from "../../assets/open-eye.svg";
import closeEye from "../../assets/close-eye.svg";
import { useState } from "react";

export default function Form({
    form,
    setForm,
    setRegistered,
}) {

  const [viewPassword, setViewPassword] = useState(true);
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const clearForm = () => {
    setForm({ name: "", email: "", password: "" });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Preencha todos os campos");
      return;
    }

    setError("");
    setRegistered(true);
  }

  return (
    <div className="form-container">
      <h1>Cadastre-se</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-input-box">
          <input
            className="form-input"
            type="text"
            placeholder="Nome"
            value={form.name}
            name="name"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <input
            className="form-input"
            type="e-mail"
            placeholder="E-mail"
            value={form.email}
            name="email"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <input
            className="form-input"
            type={viewPassword ? "password" : "text"}
            placeholder="Senha"
            value={form.password}
            name="password"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <img
            src={viewPassword ? openEye : closeEye}
            className="show-password"
            alt={viewPassword ? "mostrar senha" : "ocultar senha"}
            onClick={() => setViewPassword(!viewPassword)}
          ></img>
          <h1 className="error">{error}</h1>
          <button type="submit" className="btn btn-blue">
            CADASTRAR
          </button>
          <button className="btn btn-orange" onClick={() => clearForm()}>
            CANCELAR
          </button>
        </div>
      </form>
      <a href="" className="sign-in-btn">
        Já tem cadastro? Clique aqui!
      </a>
    </div>
  );
}
