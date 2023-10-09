import React, { useState } from "react";
import { TextField } from "@mui/material";
import "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../URL/URL";
import { useNavigate } from "react-router-dom";
import {CaixaPai,Imagem,Button} from "../AdicionarEndereço/style"
import photo from "../Fotos/futuro.png"

const AddEndereco = () => {
  const [rua, setStateRua] = useState("");
  const [numero, setStateNumero] = useState("");
  const [vizinhaca, setStateVizinhaca] = useState("");
  const [cidade, setStateCidade] = useState("");
  const [complemento, setStateComplemento] = useState("");
  const [estado, setStateEstado] = useState("");
  const navigate = useNavigate();

  const escolherRua = (event) => {
    setStateRua(event.target.value);
  };
  const escolherNumero = (event) => {
    setStateNumero(event.target.value);
  };
  const escolherVizinhaca = (event) => {
    setStateVizinhaca(event.target.value);
  };
  const escolherCidade = (event) => {
    setStateCidade(event.target.value);
  };
  const escolherComplemento = (event) => {
    setStateComplemento(event.target.value);
  };
  const escolherEstado = (event) => {
    setStateEstado(event.target.value);
  };

  const cadastrarEndereco = () => {
    const URL = `${BASE_URL}/address`;
    const header = {
      headers: {
        auth: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };
    const body = {
      street: rua,
      number: numero,
      neighbourhood: vizinhaca,
      city: cidade,
      complement: complemento,
      state: estado,
    };
    console.log(body);
    axios
      .put(URL, body, header)
      .then((res) => {
        alert(
          `Sucesso`,
          window.localStorage.setItem("token", res.data.token),
          navigate("/GetRestaurant")
        );
        console.log(res);
      })
      .catch((erro) => {
        alert("Erro no Cadastro de endereço");
      });
  };

  return (
    <CaixaPai>
      <br/>
      <Imagem><img src={photo}></img></Imagem>
      <br/>
      <div>
        <TextField
          name="Rua/Av"
          placeholder="Rua/Av."
          label="Rua/Av"
          value={rua}
          onChange={(event) => escolherRua(event)}
        />
      </div>
      <br/>
      <div>
        <TextField
          name="Numero"
          placeholder="Numero"
          label="Numero"
          value={numero}
          onChange={(event) => escolherNumero(event)}
        />
      </div>
      <br/>
      <div>
        <TextField
          name="vizinhaca"
          placeholder="Vizinhança"
          label="Vizinhanca"
          value={vizinhaca}
          onChange={(event) => escolherVizinhaca(event)}
        />
      </div>
      <br/>
      <div>
        <TextField
          name="Cidade"
          placeholder="Cidade"
          label="Cidade"
          onChange={(event) => escolherCidade(event)}
          value={cidade}
        />
      </div>
      <br/>
      <div>
        <div>
          <TextField
            name="Estado"
            placeholder="Estado"
            label="Estado"
            value={estado}
            onChange={(event) => escolherEstado(event)}
          />
        </div>
        <br/>
        <TextField
          name="complemento"
          placeholder="Complemento"
          label="complemento"
          value={complemento}
          onChange={(event) => escolherComplemento(event)}
        />
      </div>
      <br/>
      <div>
        <Button onClick={() => cadastrarEndereco()}>Cadastrar endereço</Button>
      </div>
      <Button onClick={()=>navigate("/")}>Voltar</Button>
    </CaixaPai>
  );
};

export default AddEndereco;
