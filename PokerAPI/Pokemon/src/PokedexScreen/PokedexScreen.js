import React, { useContext } from "react"
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import { useNavigate } from "react-router-dom";


const PokedexScreen=({newPokemonsList})=>{
    const {pokemonNames,setPokemonNames,pokemons,setPokemon,pokedex,setPokedex}=useContext(GlobalStateContext)
    let link=useNavigate();
    
    const pokede=pokedex.map((poke,index)=>{
        return <div key={index} pokemon={poke}> <div><img  key={poke.name} src={poke.sprites&&poke.sprites.front_default} ></img>{poke.name}</div>
    </div>
    })
  console.log(pokede)
    return (
       
       <div>
        {pokede}
       </div>
       
      
       
    )
}
export default PokedexScreen