import React,{useEffect,useState} from "react";
import GlobalStateContext from "./GlobalStateContext";
import { toast } from "react-toastify";

const GlobalState=(props)=>{
    
  
 

    const data={}
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
   
}

export default GlobalState
