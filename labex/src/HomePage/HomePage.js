import React from "react";
import { Container,Buttons,ContainerPai,Button} from "./StyledHomePage";
import {useNavigate} from "react-router-dom"

const HomePage = () => {
  let navigate=useNavigate();
  return (
    <>
      <ContainerPai>
        <Container>
          <h1>LabeX</h1>
        </Container>
        <Buttons>
          <Button onClick={()=>navigate("/ListaViagem")}>Ver Viagens</Button>
          <Button onClick={()=>navigate("/Admin")}>Àrea de Admin</Button>
        </Buttons>
      </ContainerPai>
    </>
  );
};
export default HomePage;
