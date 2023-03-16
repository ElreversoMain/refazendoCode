import styled from "styled-components"
import planet from "../IMG/planet.jpg"
import death from "../IMG/Space.jpeg"

export const Container=styled.div`
display: flex;
align-items: center;
justify-content: center;

`
export const Buttons=styled.div`
display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    

`
export const ContainerPai=styled.div`
padding-top: 250px;
background-image: url(${death});
background-repeat: no-repeat;
background-size: cover;
background-position:center ;
min-height: 665px;
min-height: 665px;

`
export const Button=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  &:active{
            color:white;
            background-color:red;
        }

`

