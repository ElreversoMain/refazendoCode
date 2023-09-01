import React from "react";
import GlobalState from "./GlobalStateContext/GlobalState";
import Router from "./Router/Router"


const App=()=>{
  return <>
  <GlobalState>
   <Router/>
  </GlobalState>
  
  
  </>
}
export default App;
