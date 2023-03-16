import React from "react";
import {useNavigate} from "react-router-dom"

const AdminArea=()=>{
    let navigate=useNavigate();
    return <>
    <div>
        <div> <input type="texto" placeholder="Nome"></input></div>
        <div><input type="texto" placeholder="Senha"></input></div>
        <div>
            <button onClick={()=>navigate("/")}>Voltar</button>
            <button>Entrar</button>
        </div>
    </div>
    </>
}
export default AdminArea