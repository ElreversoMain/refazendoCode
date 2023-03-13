import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Caixinha = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin: 20px;
  border-style: inset;

  img {
    box-shadow: 0 2px 10px 0 rgba(117, 117, 117, 0.77);
    border-radius: 5px;
    width: 100px;
    height: 100px;
    border-style: groove;
  }
`;

const TextButton = styled.div`
 button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
`;
const TextButton2=styled.div`
 background-color:#e7e7e7;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  color: black;
`




const ShowPerfill = () => {
  const navigate = useNavigate();
};

const YouChoice = () => {
  const [receiv, SetReceiv] = useState([]);
  const YouChoiceThis = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/matches"
      )
      .then((res) => {
        SetReceiv(res.data.matches);
      })
      .catch((err) => {
        alert("Erro no Aceitar Matches");
      });
  };
  useEffect(() => {
    YouChoiceThis();
  }, []);

  const Limpar = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/clear"
      )
      .then((res) => {
        alert("Matches limpos");
      })
      .catch((err) => {
        alert("erro no Button Clear");
      });
  };

  
  const listarenderizar = receiv.map((profile) => {
    
    return (
        
      <div>
        <Caixinha key={profile.id}>
          <img src={profile.photo} alt=""></img>
          <h1>{profile.name}</h1>
          <h1>{profile.age}</h1>
          <h4>{profile.bio}</h4>
    
        </Caixinha>
      </div>
    );
  });
  let navigate = useNavigate();
  return (
    <>
      <TextButton>
        <button onClick={() => navigate("/")}>Voltar</button>
      </TextButton>
      <div>
        <div> {listarenderizar}</div>

        <div>
          <TextButton2   onClick={() => Limpar()}>Limpar</TextButton2>
        </div>
      </div>
    </>
  );
};
export default YouChoice;
