import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminArea = () => {
  let navigate = useNavigate();
  const [email, setStateEmail] = useState("");
  const [password, setStatePassword] = useState("");
  const onChangeEmail = (event) => {
    setStateEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setStatePassword(event.target.value);
  };
  const onSubmitLogin = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/login";
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(URL, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Seja Bem Vindo LabeX");
        navigate("/AdminHomePage");
      })
      .catch((erro) => {
        alert("Erro no Email ou na Senha tente novamente");
      });
  };
  return (
    <>
      <div>
        <div>

          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <button onClick={() => navigate("/")}>Voltar</button>
          <button onClick={onSubmitLogin}>Entrar</button>
        </div>
      </div>
    </>
  );
};
export default AdminArea;
