import React, { useContext, useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import GlobalStateContext from "../Global/GlobalStateContext/GlobalStateContext"
import {useNavigate} from "react-router-dom"
import { PokemonListScreen } from "../Router/coordinator";
import { Imagem, Imagem2 ,Atributos, Tipos,BackGround,Habilidade} from "./Styledds";
import { PokeName } from "../PokedexScreen/Styless";


const PokemonDetailScreen=()=>{
    const [selectedPokemon,setSelectedPokemon]=useState({})
    const {name}=useParams()
    const {pokemons,setPokemon,pokedex,setPokedex,}=useContext(GlobalStateContext)
    let link=useNavigate();

    console.log(selectedPokemon)
    useEffect(()=>{
        const currentPokemon=pokemons.find((item)=>{
            return item.name===name })
            setSelectedPokemon(currentPokemon)

    },[])
    

    return (
       <div>
        <div><button onClick={()=>PokemonListScreen(link)}></button></div>
        <Imagem>
        <imagem><img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default}/></imagem>
        </Imagem>
         <Imagem2>
          <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default}/>
          </Imagem2>
          <Atributos>
            <div>Atributos :</div>
            {selectedPokemon && selectedPokemon.stats && selectedPokemon.stats.map((stat)=>{
            return (
                <p key={stat.stat.name}>
                    <strong>{stat.stat.name}:</strong><BackGround>{stat.base_stat}</BackGround>
                </p>
            )
          })}
          </Atributos>
          <Tipos>
            <div>Tipo :</div>
            {selectedPokemon && selectedPokemon.types && selectedPokemon.types.map((type)=>{
            return <p key={type.type.name}>{type.type.name}</p>
          })}
          </Tipos>
          <Habilidade>
            <div>Habilidade :</div>
            <br/>
            {selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move,index)=>{
            return (
                index <10 && <p key={move.move.name}>{move.move.name}</p>
            )
          })}
          </Habilidade>
        

       </div>
     
    
      
     
    )
}
export default PokemonDetailScreen