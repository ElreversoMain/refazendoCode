import React,{useState} from "react";
import  Router  from "./Router/Router"
import GlobalState from "./Global/GlobalStateContext/GlobalState";
import GlobalStyle from "./GlobalStyle";

const App=()=>{
  
  return (
    <GlobalState>
      <Router/>
      <GlobalStyle/>
    </GlobalState>
  )
}
export default App;


// 07/06 completo fracasso não consegui desenvolver hj 