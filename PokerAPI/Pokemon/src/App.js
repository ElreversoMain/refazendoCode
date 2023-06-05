import React,{useState} from "react";
import  Router  from "./Router/Router"
import GlobalState from "./Global/GlobalStateContext/GlobalState";

const App=()=>{
  
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  )
}
export default App;