import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import styled from "styled-components";
import undertail from "../fotos/undertail.png";
import broken from "../fotos/broken.png";
import {  useNavigate } from "react-router-dom";

const TextButton = styled.div`
  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  .button1 {
    background-color: white;
    color: black;
    border: 2px solid #4caf50;
  }

  .button1:hover {
    background-color: #4caf50;
    color: white;
  }
`;
const TextButton2 = styled.div`
  .button {
    background-color: red; /* Green */
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  .button2 {
    background-color: white;
    color: black;
    border: 2px solid #f44336;
  }

  .button2:hover {
    background-color: #f44336;
    color: white;
  }
`;
const Alinhar=styled.div`
img{
  width: 550px;
  height: 500px;
}
`


  

const ShowPerfil=()=>{
    const [getProfile,setStateGetProfile]=useState({})
    const getProfilee=()=>{
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/person")
        .then((res)=>{
            setStateGetProfile(res.data.profile)
        }).catch((err)=>{
            alert("Erro Na API")
        })

       
    }
     const ChooseShowProfile=(boleano)=>{
        const body={
            id:getProfile.id,
            choice:boleano
        }
        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/choose-person",
        body
        )
        .then((res)=>{
            getProfilee();
        }).catch((err)=>{
            alert("erro")
        })
     }
    
    useEffect(()=>{
        getProfilee();
    },[])

    let navigate=useNavigate()
    return (
        
        <div>
          <button onClick={()=>navigate("/YouChoice")}>Voltar</button>
            <Alinhar>
                <img src={getProfile.photo}></img>
                <div>{getProfile.name}</div>
                <div>{getProfile.bio}</div>
            </Alinhar>
            <TextButton>
            <button class="button button1" onClick={()=>ChooseShowProfile(true)}>
              {" "}
              <img src={undertail} height={20} width={20}></img>
            </button>
          </TextButton>
          <TextButton2>
            <button class="button button2" onClick={()=>ChooseShowProfile(false)}>
              <img src={broken} height={35} width={35}></img>
            </button>
          </TextButton2>
        </div>
    )

}
export default ShowPerfil