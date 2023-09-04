import React,{useEffect,useState} from "react";
import GlobalStateContext from "./GlobalStateContext";
import { toast } from "react-toastify";
import { BASE_URL } from "../URL/URL";
import axios from "axios";

const GlobalState=(props)=>{
    const [profile,setStateProfile]=useState([])

    const GetProfiles=()=>{
        const header={
            headers:{
                auth:window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        }
        axios
        .get(`${BASE_URL}/profile`,header)

        .then((res)=>{
            setStateProfile(res.data.user)
            console.log(res)

        })
        .catch((erro)=>{
            alert("erro no GetProfiles")
        })

    }

    
  
 

    const data={profile,setStateProfile,GetProfiles}
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
   
}

export default GlobalState;
