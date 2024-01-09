import React from "react";
import { useNavigate } from "react-router-dom";
import uma from "../photos/uma.png"
import dois from "../photos/dois.png"
import tres from "../photos/tres.png"
import quatro from "../photos/quatro.png"
import { Ordenar } from "./styled";
import { Container } from "./styled";
import {Capa} from "./styled"


const Homer = () => {
  return (
    <div>
      <Container>
        <Capa>oi</Capa>
        <div><img src={quatro}></img> <img src={dois}></img></div> 
        <div><img src={tres}></img></div>
      </Container>
    </div>
  );
};
export default Homer;
