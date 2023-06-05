import React from "react"
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Pokedex from "../Pokedex/Pokedex"
import PokemonDetail from "../PokemonDetail/PokemonDetail"
import PokemonList from "../PokemonList/PokemonList"

const Router=()=>{
    return (
       <BrowserRouter>
       <Routes>
        <Route path="/"element={<Pokedex/>}/>
        <Route path="/pokemon:name" element={<PokemonDetail/>}/>
        <Route path="/pokedex" element={<PokemonList/>}/>
       </Routes>
       </BrowserRouter>
    )
}
export default Router