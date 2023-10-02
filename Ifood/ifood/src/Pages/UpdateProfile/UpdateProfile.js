import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../URL/URL";
import { TextField } from "@mui/material";

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
    <div><TextField
    name="NewName"
    placeholder="Escolha um novo Nome"
    label="*Nome"
    onChange={(event)=>updateProfile(event)}
    value={newName}
    /></div>

    <div>
      <TextField
      name="NewEmail"
      placeholder="Escolha um novo Email"
      label="*Email"
      onChange={(event)=>updateEmail(event)}/>
    </div>
    <div>
      <TextField
      name="NewCpf"
      placeholder="Escolha um CPF"
      label="*CPF"
      inputProps={{ maxLength: 10 }}
      onChange={(event)=>updateCpf(event)}/>
    </div>
    <button onClick={()=>Update()}></button>
    

  </div>;
};
export default UpdateProfile;
