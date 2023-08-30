import React,{useEffect,useState} from "react";
import GlobalStateContext from "./GlobalStateContext";
import URL from "../URL/URL"
import axios from "axios"

const GlobalState=(props)=>{
  

 
 

    const data={}
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
   
}

export default GlobalState
