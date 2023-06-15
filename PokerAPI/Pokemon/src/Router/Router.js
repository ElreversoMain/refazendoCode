import React from "react"
import {BrowserRouter,Route, Routes} from "react-router-dom"
import PokedexScreen from "../PokedexScreen/PokedexScreen"
import PokemonDetailScreen from "../PokemonDetailScreen/PokemonDetailScreen"
import PokemonListScreen from "../PokemonListScreen/PokemonListScreen"

const Router=()=>{
    return (
       <BrowserRouter>
       <Routes>
        <Route path={"/"}element={<PokemonListScreen/>}/>
        <Route path={"/pokemons/:name"} element={<PokemonDetailScreen/>}/>
        <Route path={"/pokedex"} element={<PokedexScreen/>}/>
       </Routes>
       </BrowserRouter>
    )
}
export default Router