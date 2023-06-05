import react, { useEffect, useState } from "react"
import GlobalStateContext from "./GlobalStateContext"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"
//29:02

const GlobalState=(props)=>{
   const [pokemonNames,setPokemonNames]=useState([])
   const [pokemons,setPokemon]=useState([])

   console.log(pokemons)
   useEffect(()=>{
     getPokemonNames()
   },[])

   useEffect(()=>{
    const newList=[]
    pokemonNames.forEach((item)=>{
        axios.get(item.url).then((response)=>{
            newList.push(response.data)
            if(newList.length===20){
                setPokemon(newList)
            }
        })


        .catch((error)=>{
        console.log(error.message)
    })
    })

   },[pokemonNames])

   const getPokemonNames=()=>{
    axios.get(`${BASE_URL}/pokemon`)
    .then((response)=>
    setPokemonNames(response.data.results)
    ).catch((error)=>{
        console.log(error.message)
    })
   }

    return (
        <GlobalStateContext.Provider value={{}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState