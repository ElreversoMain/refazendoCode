import React from "react";
import { useNavigate } from "react-router-dom";
import dois from "../photos/dois.png"
import tres from "../photos/tres.png"
import quatro from "../photos/quatro.png"
import { Container } from "./styled";
import {Capa} from "./styled"





const Homer = () => {
  return (
    <div>
      <Capa>
       <a href="http://localhost:3000/Cardapio"><h2>Cardápio</h2></a> 
      </Capa>
      <Container>
      <br/>
        <div><img src={quatro}></img><img src={dois}></img></div> 
        <br/>
        <div><img src={tres}></img></div>
      </Container>
    </div>
  );
};
export default Homer;
