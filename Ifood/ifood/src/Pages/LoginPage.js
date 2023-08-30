import React,{useEffect,useState} from "react";
import "@mui/material"
import { TextField } from "@mui/material";
import axios from "axios";





const LoginPage=()=>{
const[Login,SetStateLogin]=useState("")
const[Senha,SetStateSenha]=useState("")
      
const fazerLogin=(event)=>{
SetStateLogin(event.target.value);
}
const fazerSenha=(event)=>{
SetStateSenha(event.target.value)
}

const Logando=()=>{
const URL="https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/login";
const body={
    email:Login,
    password:Senha,
};
axios
.post(URL,body)
.then((res)=>{
window.localStorage.setItem("token",res.data.token);
//navigator("/")
alert(`Seja bem vindo ${Login}`)
})
.catch((erro)=>{
alert("Usuario Não Encontrado")
})
}
    return <div>
    <TextField 
    name="email"
    placeholder="Email@email.com"
    label="E-mail"
    fullWidth
    onChange={(event)=>fazerLogin(event)}
    value={Login}>

    </TextField>

    <TextField
    name="senha"
    placeholder="123456"
    label="Senha"
    fullWidth
    onChange={(event)=>fazerSenha(event)}
    value={Senha}>
    </TextField>
    <button onClick={()=>Logando()}>Entrar</button>
    </div>
}

export default LoginPage;