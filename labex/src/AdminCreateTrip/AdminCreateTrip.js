
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminCreateTrip=()=>{
    let navigate=useNavigate();
    const[name,setName]=useState("")
    const[planeta,setPlaneta]=useState("")
    const[descricao,setDescricao]=useState("")
    const [duracao,setDuracao]=useState("")
    const [date,setDate]=useState("")
    
    const mudarNome=(event)=>{
        setName(event.target.value)
    }
    const mudarPlaneta=(event)=>{
        setPlaneta(event.target.value)
    }
    const mudarDescricao=(event)=>{
        setDescricao(event.target.value)
    }
    const mudarDuracao=(event)=>{
        setDuracao(event.target.value)
    }
    const mudarDate=(event)=>{
        setDate(event.target.value)
    }
    const createTrip=()=>{
        const body={
            name:name,
            planet:planeta,
            date:date,
            description:descricao,
            durationInDays:duracao
        }
        axios.post
            ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips", body, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            }).then((res) => {
                console.log("sucesso")
                navigate("/AdminHomePage")
            })

    }
    const handleClick = (e) => {
        e.preventDefault()
        createTrip()
    }
        
    

    return <>
    <div>
        <div>
            <form onSubmit={handleClick}>
            <h2>Criar criarViagem</h2>
            <div><input type="texto" placeholder="Nome" onChange={mudarNome} value={name}/></div>
            <select name="Planetas" onChange={mudarPlaneta} value={planeta}>
                <option value="">Escolha um Planeta</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Vênus">Vênus</option>
                <option value="Terra">Terra</option>
                <option value="Marte">Marte</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
                <option value="Plutão">Plutão</option>
            </select>
            <div><input type="texto" placeholder="descrição" onChange={mudarDescricao} value={descricao}/></div>
            <div><input type="texto" placeholder="Duração de dias" onChange={mudarDuracao} value={duracao}/></div>
            <div><input type="texto" placeholder="data" onChange={mudarDate} value={date}/></div>
            <button type={"submit"}>Criar</button>
            <button onClick={()=>navigate("/AdminHomePage")}>Voltar</button>
            </form>
           
        </div>
    </div>
    </>
}
export default AdminCreateTrip