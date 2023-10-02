import styled from "styled-components";

export const CaixaPai = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;
export const Imagem = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  height: 75px;
  :hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;
export const Button = styled.button`
  background-color: mediumseagreen;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
`;
