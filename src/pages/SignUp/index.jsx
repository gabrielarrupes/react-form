import "./style.css";
import { useState } from "react";
import Form from "../../componentes/Form";
import Banner from "../../componentes/Banner";
import womanSuccess from "../../assets/woman-success.png";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const [viewPassword, setViewPassword] = useState(true);

  return (
    <div className="container">
      <div>
        {!registered ? (
          <Form
            name={form.name}
            email={form.email}
            password={form.password}
            form={form}
            setForm={setForm}
            error={error}
            setError={setError}
            registered={registered}
            setRegistered={setRegistered}
            viewPassword={viewPassword}
            setViewPassword={setViewPassword}
          />
        ) : (
          <div className="sucess-container">
            <img
              src={womanSuccess}
              className="woman-sucess"
              alt="Imagem de registro efetuado!"
            ></img>
            <h1 className="registered-message">
              Cadastro efetuado com sucesso!
            </h1>
          </div>
        )}
      </div>
      <div className="banner-container">
        <Banner />
      </div>
    </div>
  );
}

export default SignUp;
