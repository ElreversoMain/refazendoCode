import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import {useNavigate} from "react-router-dom"
import { PokedexScreen, PokemonDetailScreen} from "../Router/coordinator"
import {  Button, Container, PokerImage, PokerName ,Buttonn, Tittle,TextButton, Button1, Button2, ContainerPai} from "./StyledList";
import img from "../img/left-icon.png"
import img2 from "../img/right-icon.png"

 
const PokemonListScreen=({isPokedex})=>{
    const {pokemons,setPokemon,pokedex,setPokedex,goToNextPage,goToPrevioustPage,offset}=useContext(GlobalStateContext)
    let link=useNavigate();


   
    

    const addToPokedex=(pokename)=>{ 
      const pokeSelecionado=pokemons.find((item)=>item.name===pokename)
      const newPokemonsList=[...pokedex,pokeSelecionado]

      setPokedex(newPokemonsList)
    }
    
    const removeFromPokedex=()=>{

    }
    

   
  const pokemon=pokemons.map((poke)=>{
    return <Container key={poke.name} pokemon={poke}> 
    <PokerName> <h3>{poke.name}</h3></PokerName> 
    <PokerImage><img  key={poke.name} src={poke.sprites&&poke.sprites.front_default} ></img></PokerImage>
    
    <div><Button2 class="button1"onClick={()=>PokemonDetailScreen(link,poke.name)}>Detalhes</Button2>
    <Button1 class="button" onClick={isPokedex ? removeFromPokedex :()=> addToPokedex(poke.name)}>{isPokedex}Adicionar</Button1>
    </div>
    

    </Container>
    
    
  })
  
    return (
      <div>
        <div> 
          <Tittle><img src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png"></img></Tittle>
          <div><TextButton onClick={()=>PokedexScreen(link)}><img src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png" width={25} height={25} ></img></TextButton></div>
          <br/>
          <ContainerPai>
          {pokemon}
          </ContainerPai>
           
           <div>
           {offset !== 1140 && <Button onClick={() => goToNextPage()} > 
                    <img src={img} width={25}/> </Button>}
                {offset !== 0 && <Buttonn onClick={() => goToPrevioustPage()} >
                  <img src ={img2} width={25}></img>
                    </Buttonn>}
                
                
            </div>
        
        </div>
        </div>
    )
}
export default PokemonListScreen