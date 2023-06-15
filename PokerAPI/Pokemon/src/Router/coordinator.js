import {Navigate} from "react-router-dom"

export const PokemonListScreen=(history)=>{
history.push("/");
}

export const PokemonDetailScreen=(navigate,name)=>{
    navigate(`/pokemons/${name}`);
}
export const PokedexScreen=(history)=>{
  history.push("/pokedex");
}