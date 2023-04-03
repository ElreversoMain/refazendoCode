import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const ListTripsPage=()=>{
    let navigate=useNavigate();
    const [lista,setLista]=useState([])

    const showTrip=()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips")
        .then((res)=>{
            setLista(res.data.trips)
        }).catch((erro)=>{
            alert("Erro no ShowTrip")
        })
    }
     useEffect(()=>{
        showTrip()
        
     },[])

     const renderizar=lista.map((viagem)=>{
        return <div key={viagem.id}><h2> Nome: {viagem.name}</h2> <h2>Descrição: {viagem.description}</h2> <h2>Planeta: {viagem.planet}</h2> <h2> Duração: {viagem.durationInDays}</h2> <h2>Data: {viagem.date}</h2>
        <div><button onClick={()=>navigate("/ApplicationFormPage")}>Inscreva-se</button></div>
        </div>
     })

     return (
        <div>
            <div>{renderizar}</div>
            <div>
                <button onClick={()=>navigate("/")}>Voltar</button>
            </div>
            
        </div>
     )
}
export default ListTripsPage