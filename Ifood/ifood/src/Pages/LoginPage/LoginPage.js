import React, { useContext, useEffect, useState } from "react";
import "@mui/material";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../URL/URL";
import { useNavigate } from "react-router-dom";
import { Button, Caixa, Alinhar,Photo } from "./Styled";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import photo from "../Fotos/futuro.png"

const LoginPage = () => {
  const {  } = useContext(GlobalStateContext);
  const [Login, SetStateLogin] = useState("");
  const [Senha, SetStateSenha] = useState("");
  const navigate = useNavigate();

  const fazerLogin = (event) => {
    SetStateLogin(event.target.value);
  };

  const fazerSenha = (event) => {
    SetStateSenha(event.target.value);
  };

  const Logando = () => {
    const URL = `${BASE_URL}/login`;
    const body = {
      email: Login,
      password: Senha,
    };
    axios
      .post(URL, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        if (res.data.user.hasAddress === true) {
          navigate("/GetRestaurant");
        } else {
          navigate("/AddEndereco");
        }
      })
      .catch((error) => {
        alert("Senha ou Email Invalidos");
       console.log(error.message)
      });
  };
  return (
    <Caixa>
      <Photo><img src={photo}></img></Photo>
      <div>
        <TextField
          name="email"
          placeholder="Email@email.com"
          label="E-mail"
          fullWidth
          onChange={(event) => fazerLogin(event)}
          value={Login}
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </div>
      <br />

      <div>
        <TextField
          name="senha"
          placeholder="123456"
          label="Senha"
          fullWidth
          onChange={(event) => fazerSenha(event)}
          value={Senha}
          inputProps={{ maxLength: 10 }}
          required
        />
      </div>
      <br />
      <Button onClick={() => Logando()}  >Entrar</Button>
      <Alinhar>
        <br />

        <a onClick={() => navigate("/Cadastrar")}>
          Não e Cadastrado ? <u>Registrar-se</u> aqui!
        </a>
      </Alinhar>
    </Caixa>
  );
};

export default LoginPage;
