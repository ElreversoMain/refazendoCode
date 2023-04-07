import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage=()=>{
    let navigate=useNavigate();

    return <>
    <div>
        <div><h2>Welcome to GalaxyTrip</h2></div>
        <div><button>Fazer Login</button></div>
        <div>Ver Viagens</div>
    </div>
    </>
}
export default Homepage