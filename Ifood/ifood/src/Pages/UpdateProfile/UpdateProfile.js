import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../URL/URL";
import { TextField } from "@mui/material";
import {CaixaPai,Button,PositionButton,PositionImage} from "../UpdateProfile/styled"
import photo from "../Fotos/futuro.png"

const UpdateProfile = () => {
  const [newName, setStateNewName] = useState("");
  const [newEmail, setStateNewEmail] = useState("");
  const [newCPF, setStateNewCPF] = useState("");

  const updateProfile = (event) => {
      setStateNewName(event.target.value);
    };
    const updateEmail = (event) => {
      setStateNewEmail(event.target.value);
    };
    const updateCpf = (event) => {
      setStateNewCPF(event.target.value);
    };
  
  const Update=()=>{
    const URL=`${BASE_URL}/profile`;
    const header={
      headers:{
        auth:window.localStorage.getItem("token")
      },
    };
    const body={
      name:newName,
      email:newEmail,
      cpf:newCPF
    };
    axios
    .put(URL,body,header)
    .then((res)=>{
      alert(`Sucesso ${newName}`)
      console.log(res)
    })
    .catch((erro)=>{
      alert("erro no Update")
    })
  }
  return <div>
    <CaixaPai>
    <PositionImage><img src={photo}></img></PositionImage>
    <br/>
    <div><TextField
    name="NewName"
    placeholder="Escolha um novo Nome"
    label="*Nome"
    onChange={(event)=>updateProfile(event)}
    value={newName}
    /></div>
    <br/>
    <div>
      <TextField
      name="NewEmail"
      placeholder="Escolha um novo Email"
      label="*Email"
      onChange={(event)=>updateEmail(event)}/>
    </div>
    <br/>
    <div>
      <TextField
      name="NewCpf"
      placeholder="Escolha um CPF"
      label="*CPF"
      inputProps={{ maxLength: 10 }}
      onChange={(event)=>updateCpf(event)}/>
    </div>
    <br/>
    </CaixaPai  >
    
    <PositionButton> <Button onClick={()=>Update()}>Cadastrar</Button></PositionButton>

  </div>;
};
export default UpdateProfile;
