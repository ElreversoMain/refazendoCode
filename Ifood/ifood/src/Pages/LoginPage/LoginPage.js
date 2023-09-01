import React, { useEffect, useState } from "react";
import "@mui/material";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../URL/URL";
import { useNavigate } from "react-router-dom";
import { Button, Caixa,Alinhar} from "./Styled";

const LoginPage = () => {
  const [Login, SetStateLogin] = useState("");
  const [Senha, SetStateSenha] = useState("");
  let navigator = useNavigate();

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
        //navigator("/")
        alert(`Seja bem vindo ${Login}`);
        console.log(res.data.token);
      })
      .catch((erro) => {
        alert("Usuario Não Encontrado");
      });
  };
  return (
    <Caixa>
      <div>
        <TextField
          name="email"
          placeholder="Email@email.com"
          label="E-mail"
          fullWidth
          onChange={(event) => fazerLogin(event)}
          value={Login}
          type="email"
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
        />
      </div>
      <br />
      <Button onClick={() => Logando()}>Entrar</Button>
      <Alinhar>
        <br />
       
          <a onClick={() => navigator("/Cadastrar")}>
            Não e Cadastrado ? <u>Registrar-se</u> aqui!
          </a>
        
      </Alinhar>
    </Caixa>
  );
};

export default LoginPage;
