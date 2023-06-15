import React, { useContext, useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext"


const PokemonDetailScreen=({pokemon,nome,key})=>{
    const [selectedPokemon,setSelectedPokemon]=useState({})
    const {name}=useParams()
    const {pokemons}=useContext(GlobalStateContext)


    console.log(selectedPokemon)
    useEffect(()=>{
        const currentPokemon=pokemons.find((item)=>{
            return item.name===name })
            setSelectedPokemon(currentPokemon)

    },[])

  

    return (
       <div>

         <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default}/>
         <div><img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default}/></div>
          <div>
            {selectedPokemon && selectedPokemon.stats && selectedPokemon.stats.map((stat)=>{
            return (
                <p key={stat.stat.name}>
                    <strong>{stat.stat.name}:</strong>{stat.base_stat}
                </p>
            )
          })}
          </div>
          <div>
            {selectedPokemon && selectedPokemon.types && selectedPokemon.types.map((type)=>{
            return <p key={type.type.name}>{type.type.name}</p>
          })}
          </div>
          <div>{selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move,index)=>{
            return (
                index <10 && <p key={move.move.name}>{move.move.name}</p>
            )
          })}</div>
       </div>
       

    
      
     
    )
}
export default PokemonDetailScreen