import "./style.css";
import openEye from "../../assets/open-eye.svg";
import closeEye from "../../assets/close-eye.svg";

export default function Form({
  name,
  email,
  password,
  form,
  setForm,
  error,
  setError,
  registered,
  setRegistered,
  viewPassword,
  setViewPassword,
}) {
  function handleOnChange(e) {
    setError("");
    const value = e.target.value;

    setForm({ ...form, [e.target.name]: value });
  }

  function clearForm() {
    setForm({ name: "", email: "", password: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Preencha todos os campos");
      console.log(error);
      return;
    }

    setError("");
    setRegistered(true);
  }

  return (
    <div className="sign-up-container">
      <h1>Cadastre-se</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Nome"
            value={form.name}
            name="name"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <input
            type="e-mail"
            placeholder="E-mail"
            value={form.email}
            name="email"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <input
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
