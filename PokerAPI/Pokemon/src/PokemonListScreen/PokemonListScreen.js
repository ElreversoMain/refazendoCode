import React, { useContext } from "react";
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import {useNavigate} from "react-router-dom"
import { PokemonDetailScreen} from "../Router/coordinator"

const PokemonListScreen=()=>{
    const {pokemons}=useContext(GlobalStateContext)
    let link=useNavigate();

   
  const pokemon=pokemons.map((poke)=>{
    return <div key={poke.name} pokemon={poke}> <div><img  key={poke.name} src={poke.sprites&&poke.sprites.front_default} ></img>{poke.name}</div>
    <button onClick={()=>PokemonDetailScreen(link,poke.name)}>Ver Detalhes</button> </div>
  })

    return (
        <div>PokemonListScreen
           <div key={pokemons.name}>{pokemon}</div>
           
            

           
        </div>
    )
}
export default PokemonListScreen