import React, { useContext } from "react"
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import {  PokemonDetailScreen} from "../Router/coordinator"

const PokedexScreen=({isPokedex})=>{
    const {pokemonNames,setPokemonNames,pokemons,setPokemon,pokedex,setPokedex}=useContext(GlobalStateContext)
    let link=useNavigate();
    
    const addToPokedex=(pokename)=>{}

    const removeFromPokedex=()=>{

    }
    const pokede=pokedex.map((poke,index)=>{
        return <div key={index} pokemon={poke}> <div><img  key={poke.name} src={poke.sprites.versions["generation-v"]["black-white"].animated.front_default}/>{poke.name} </div>
        <div key={index} pokemon={poke}><img key={poke.name} src={poke.sprites.versions["generation-v"]["black-white"].animated.back_default}></img></div>
      <button onClick={()=>PokemonDetailScreen(link,poke.name)}>Ver Detalhes</button> 
    </div>
    })
    return (
       
       <div>
        {pokede}
       </div>
       
      
       
    )
}
export default PokedexScreen