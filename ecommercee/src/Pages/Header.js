import React from "react";
import  foto from "../photo/foto.png"
import styled from "styled-components";

const Tittle=styled.div`
background-color: purple;
display: flex;
align-items: center;
justify-content: center;
height: 60px;
width: 100%;
overflow-y: hidden;

img{
  height: 75px;
   :hover{
    -webkit-transform: scale(2.0);
    transform: scale(2.0);
    
   }
  
}
p{
    font-size: 50px;
    font-family: sans-serif;
    color:black;
    /* text-decoration:overline;
    text-decoration:underline; */
}

`


const Header=()=>{
  return <div>
    <Tittle> <p>Joy Space</p> <a href="http://localhost:3000/"><imagem><img src={foto}/></imagem></a></Tittle>
    
    
       

    
  </div>
}

export default Header;
