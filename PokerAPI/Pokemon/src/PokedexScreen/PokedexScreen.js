import React, { useContext } from "react"
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import {  PokemonDetailScreen, PokemonListScreen} from "../Router/coordinator"
import { PokeName, ImagemPokemon,Container } from "./Styless";

const PokedexScreen=({isPokedex})=>{
    const {pokemonNames,setPokemonNames,pokemons,setPokemon,pokedex,setPokedex}=useContext(GlobalStateContext)
    let link=useNavigate();
    
    const addToPokedex=(pokename)=>{}

    const removeFromPokedex=()=>{

    }
    const pokede=pokedex.map((poke,index)=>{
        return <Container key={index} pokemon={poke}> <PokeName><h4>{poke.name}</h4></PokeName>
        <ImagemPokemon><img  key={poke.name} src={poke.sprites.versions["generation-v"]["black-white"].animated.front_default}/> <img key={poke.name} src={poke.sprites.versions["generation-v"]["black-white"].animated.back_default}></img>
        </ImagemPokemon>
        <br/>
      <button onClick={()=>PokemonDetailScreen(link,poke.name)}>Ver Detalhes</button> 
    </Container>
    })
    return (
       
       <div>
        <div><button onClick={()=>PokemonListScreen(link)}>Voltar Pokedex</button></div>

        {pokede}
       </div>
       
      
       
    )
}
export default PokedexScreen