import styled from "styled-components"


export const Container=styled.div`
 display: grid;
 justify-content: space-around;
 flex-wrap: nowrap;
 justify-content: center;
 float:left;
 justify-content: space-between;
 row-gap: 20px;
 column-gap: 20px;
 margin: 20px;
 width: 33,33%;
 padding: 5px;
 
`
export const PokerName=styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const PokerImage=styled.div`
background-color: black;
border-radius: 500px;
align-items: center;
justify-content: center;
padding-left: 75px;
 &:hover{
    background-color: green;
    
        }
    

`
export const Button=styled.button`
background-color: transparent;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: absolute;
    top: 17px;
    left: 8vw;
`

export const Buttonn=styled.button`
background-color: transparent;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: absolute;
    top: 17px;
    left: 10vw;
    `

export const Tittle=styled.div` 
 display: flex;
 background-color:red;
 align-items: center;
 justify-content: center;
 margin: 0;
 padding: 0;
    
`
export const TextButton=styled.button`
background-color: red;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
position: absolute;
`
export const Button1=styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px;
  margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
 
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;

:hover {
  background-color: #4CAF50;
  color: white;
}
    
`
export const Button2=styled.button`
 background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px;
  margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white; 
  color: black; 
  border: 2px solid #008CBA;
  :hover {
  background-color: #008CBA;
  color: white;
}
`

export const ContainerPai=styled.div`
padding-left: 65px;

`

