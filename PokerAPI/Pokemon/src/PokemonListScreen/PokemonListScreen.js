import React, { useContext } from "react";
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const PokemonListScreen=()=>{
    const {pokemons}=useContext(GlobalStateContext)
    let navigate=useNavigate();

   
    return (
        <div>PokemonListScreen
            {pokemons.map((poke)=>{
                return <> <div key={poke.id}><img src={poke.sprites&&poke.sprites.front_default}></img>{poke.name}</div>
                <button onClick={()=>navigate(`/pokemon/${poke.name}`)}>Ver Detalhes</button>
               </>
            })}

           
        </div>
    )
}
export default PokemonListScreen