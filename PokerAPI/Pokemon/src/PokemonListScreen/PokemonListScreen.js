import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import {useNavigate} from "react-router-dom"
import { PokedexScreen, PokemonDetailScreen} from "../Router/coordinator"


const PokemonListScreen=({isPokedex})=>{
    const {pokemons,setPokemon,pokedex,setPokedex}=useContext(GlobalStateContext)
    let link=useNavigate();

   
    

    const addToPokedex=(pokename)=>{ 
      const pokeSelecionado=pokemons.find((item)=>item.name===pokename)
      const newPokemonsList=[...pokedex,pokeSelecionado]
   
    
      

      setPokedex(newPokemonsList)
      
     
    }
    
    const removeFromPokedex=()=>{

    }

   
  const pokemon=pokemons.map((poke)=>{
    return <div key={poke.name} pokemon={poke}> <div><img  key={poke.name} src={poke.sprites&&poke.sprites.front_default} ></img>{poke.name}</div>
    <button onClick={()=>PokemonDetailScreen(link,poke.name)}>Ver Detalhes</button>
    <div><button onClick={isPokedex ? removeFromPokedex :()=> addToPokedex(poke.name)}>{isPokedex?"Remover da pOkedex":"Adicionar Pokedex"}</button></div> 
    </div>
    
    
  })
    return (
        <div>PokemonListScreen
          <div><button onClick={()=>PokedexScreen(link)}></button></div>
           {/* <div key={pokemons.name}>{pokemon}</div> */}
           {pokemon}
           
            

           
        </div>
    )
}
export default PokemonListScreen