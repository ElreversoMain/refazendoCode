import React from "react";
import {useNavigate} from "react-router-dom"

const ListaViagem=()=>{
    let navigate=useNavigate();
    return <>
    <div>
        <div><button onClick={()=>navigate("/")}>Voltar</button></div>
        <div><button onClick={()=>navigate("/Inscreva")}>Inscrever-se</button></div>
        <div><h1>Lista de Viagem</h1></div>
    </div>
    </>
}
export default ListaViagem