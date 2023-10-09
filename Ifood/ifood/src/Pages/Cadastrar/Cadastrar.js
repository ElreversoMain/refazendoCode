import React, { useState } from "react";
import "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../URL/URL";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CaixaPai, Button, Photo } from "./Styled";
import photo from "../Fotos/futuro.png"

const Cadastrar = () => {
  const [Name, setStateName] = useState("");
  const [email, setStateEmail] = useState("");
  const [CPF, setStateCPF] = useState("");
  const [password, setStatePassword] = useState("");
  const navigate = useNavigate();

  const escolherNome = (event) => {
    setStateName(event.target.value);
  };
  const escolherEmail = (event) => {
    setStateEmail(event.target.value);
  };
  const escolherCPF = (event) => {
    setStateCPF(event.target.value);
  };
  const escolherPassword = (event) => {
    setStatePassword(event.target.value);
  };

  const Cadastrar = () => {
    const URL = `${BASE_URL}/signup`;
    const header = {
      headers: {
        auth: window.localStorage.getItem("token"),
      },
    };
    const body = {
      name: Name,
      email: email,
      cpf: CPF,
      password: password,
    };
    axios
      .post(URL, body, header)
      .then((res) => {
        alert(`Sucesso ${Name}`, navigate("/AddEndereco"));
      })
      .catch((res) => {
        alert("Algo no cadastro esta errado");
      });
  };
  return (
    <CaixaPai>
      <Photo><img src={photo}></img></Photo>
      <div>
        <TextField
          name="nome"
          placeholder="Escolha seu nome"
          label="Nome*"
          onChange={(event) => escolherNome(event)}
          value={Name}
        />
      </div>
      <br />
      <div>
        <TextField
          name="e-mail"
          placeholder="email@email.com"
          label="E-mail*"
          value={email}
          onChange={(event) => escolherEmail(event)}
        />
      </div>
      <br />
      <div>
        <TextField
          name="CPF"
          placeholder="000.000.000-00"
          label="CPF"
          value={CPF}
          onChange={(event) => escolherCPF(event)}
          inputProps={{ maxLength: 11 }}
        />
      </div>
      <br />
      <div>
        <TextField
          name="senha"
          placeholder="Mínimo 10 caract"
          label="Senha*"
          value={password}
          onChange={(event) => escolherPassword(event)}
          inputProps={{ maxLength: 10 }}
        />
      </div>
      <br />
      <div>
        <Button onClick={() => Cadastrar()}>Cadastrar</Button>
      </div>
      <Button onClick={()=>navigate("/")}>Voltar</Button>
    </CaixaPai>
  );
};
export default Cadastrar;
