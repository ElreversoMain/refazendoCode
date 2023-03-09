import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Caixinha=styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin: 20px;
 
img{
    box-shadow: 0 2px 10px 0 rgba(117,117,117,0.77);
	border-radius: 5px;
	
	
	

width: 100px;
height: 100px;

}
`



const ShowPerfill = () => {
    const navigate = useNavigate();
  };

const YouChoice=()=>{
    const[receiv,SetReceiv]=useState([])

    const YouChoiceThis=()=>{
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/matches")
        .then((res)=>{
            SetReceiv(res.data.matches)
        })
        .catch((err)=>{
            alert("Erro no Aceitar Matches")
        })

        

    }
    useEffect(()=>{
            YouChoiceThis();
        },[])

    
        const Limpar=()=>{
            axios
            .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/clear")
            .then((res)=>{
                alert("Matches limpos")
            })
            .catch((err)=>{
                alert("erro no Button Clear")
            })
        }
       

    const listarenderizar=receiv.map((profile)=>{
        return<div >
            <Caixinha key={receiv.key}>
            <img src={profile.photo} alt=""></img>
            <h1>{profile.name}</h1>
            <h1>{profile.age}</h1>
            </Caixinha>
        </div>
    })
    let navigate=useNavigate()
    return(
        <>
        <div><button onClick={()=>navigate("/")}>Voltar</button></div>
        <div>
            <div> {listarenderizar}</div>
            
            <div><button onClick={()=>Limpar()}>Limpar</button></div>
        </div>
        
        </>
    )
}
export default YouChoice