import {Navigate} from "react-router-dom"

export const PokemonListScreen=(navigate)=>{
navigate("/");
}

export const PokemonDetailScreen=(navigate,name)=>{
    navigate(`/pokemons/${name}`);
}
export const PokedexScreen=(navigate)=>{
  navigate("/pokedex");
}