import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import {useNavigate} from "react-router-dom"
import { PokedexScreen, PokemonDetailScreen} from "../Router/coordinator"
import {  Button, Container, PokerImage, PokerName ,Buttonn} from "./StyledList";
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
    
    <div><button onClick={()=>PokemonDetailScreen(link,poke.name)}>Detalhes</button>
    <button onClick={isPokedex ? removeFromPokedex :()=> addToPokedex(poke.name)}>{isPokedex}Adicionar</button>
    </div>
    

    </Container>
    
    
  })
    return (
        <div>
          <div><button onClick={()=>PokedexScreen(link)}>Pokedex</button></div>
           {pokemon}
           <div>
           {offset !== 1140 && <Button onClick={() => goToNextPage()} > 
                    <img src={img} width={25}/> </Button>}
                {offset !== 0 && <Buttonn onClick={() => goToPrevioustPage()} >
                  <img src ={img2} width={25}></img>
                    </Buttonn>}
                
                
            </div>
        
        </div>
    )
}
export default PokemonListScreen