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

  const [registered, setRegistered] = useState(false);

  return (
    <>
      <div className="signup-container">
          {!registered ? (
            <Form
              form={form}
              setForm={setForm}
              setRegistered={setRegistered}
            />
          ) : (
            <div className="signup-sucess-container">
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
        <Banner />
      </div>
    </>
  );
}

export default SignUp;
