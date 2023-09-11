import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../URL/URL";
import { TextField } from "@mui/material";

const UpdateProfile = () => {
  const [newName, setStateNewName] = useState("");
  const [newEmail, setStateNewEmail] = useState("");
  const [newCPF, setStateNewCPF] = useState("");

  const updateProfile = (event) => {
    event.preventDefault()
    const headers = {headers : {auth : localStorage.getItem("token")}}

    axios
        .put(`${BASE_URL}profile`, form, headers )
        .then(() => {
            alertSuccess("Conta atualizada com sucesso!")
        })

        .catch((error) => {
            alertError("Algo de errado ocorreu :(")
            console.log(error)
        })
}
  return (
    <div>
    
    </div>
  );
};
export default UpdateProfile;
