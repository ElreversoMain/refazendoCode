import React from "react";
import styled from "styled-components";
import git from "../photo/git.png"
import link from "../photo/link.png"

const Footers=styled.div`
background-color: purple;
width: 100%;
height: 50px;
`
const Imagina=styled.div`
background-color: purple;
display: flex;
justify-content: space-around;
img{
    width: 50px;
}
img:hover{
    width: 50px;
    transform: scale(1.2);
    transform: rotate(360deg);
    transition: transform .4s
   
}

`

const Footer=()=>{
    return<div>
        <Footers>
            <Imagina><imagem ><img src={link} /></imagem>   <imagem><img src={git}/></imagem></Imagina>
        </Footers>
    </div>
}
export default Footer