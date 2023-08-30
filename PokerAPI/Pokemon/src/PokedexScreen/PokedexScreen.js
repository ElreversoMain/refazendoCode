import React, { useContext } from "react"
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import {  PokemonDetailScreen, PokemonListScreen} from "../Router/coordinator"
import { PokeName, ImagemPokemon,Container,ButtonObserve,ButtonObserve2,PokeBola } from "./Styless";

const PokedexScreen=({isPokedex})=>{
    const {pokemonNames,setPokemonNames,pokemons,setPokemon,pokedex,setPokedex}=useContext(GlobalStateContext)
    let link=useNavigate();
    
    const removeFromPokedex=(pokename)=>{ 
      const pokeSelecionado=pokemons.find((item)=>item.name===pokename)
      const newPokemonsList=[pokedex]
      newPokemonsList.splice(pokeSelecionado,1)

      setPokedex(newPokemonsList)
    }


    const pokede=pokedex.map((poke,index)=>{
        return <Container key={index} pokemon={poke}> <PokeName><h4>{poke.name}</h4></PokeName>
        <ImagemPokemon><img  key={poke.name} src={poke.sprites.versions["generation-v"]["black-white"].animated.front_default}/> <img key={poke.name} src={poke.sprites.versions["generation-v"]["black-white"].animated.back_default}></img>
        </ImagemPokemon>
        <br/>
      <ButtonObserve onClick={()=>PokemonDetailScreen(link,poke.name)}>Ver Detalhes</ButtonObserve> 
      <ButtonObserve2 onClick={()=>removeFromPokedex(link,poke.name)}>Tirar</ButtonObserve2>
    </Container>
    })
    return (
       
       <div>
        <div><PokeBola onClick={()=>PokemonListScreen(link) }><img src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png" width={25} height={25} ></img></PokeBola></div>
        

        {pokede}
       </div>
       
      
       
    )
}
export default PokedexScreen