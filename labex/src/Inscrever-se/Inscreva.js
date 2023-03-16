import React from "react";
import {useNavigate} from "react-router-dom"

const Inscreva=()=>{
    let navigate=useNavigate();
    return <>
    <div>
        <div><h1>Inscreva-se Para uma viagem</h1></div>
     <div><input type="texto" placeholder="Nome"></input></div>
     <div><input type="texto" placeholder="idade"></input></div>
     <div><input type="texto" placeholder="Texto de Candidatura"></input></div>
     <div><input type="Profissão" placeholder="Profissão"></input></div>
     <div> <button onClick={()=>navigate("/ListaViagem")}>Voltar</button></div>
     <div><button>Enviar</button></div>
    </div>
    </>
}
export default Inscreva