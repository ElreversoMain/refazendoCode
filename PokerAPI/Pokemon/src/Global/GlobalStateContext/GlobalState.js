import react, { useEffect, useState } from "react"
import GlobalStateContext from "./GlobalStateContext"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"


const GlobalState=(props)=>{
   const [pokemonNames,setPokemonNames]=useState([])
   const [pokemons,setPokemon]=useState([])
   const [pokedex,setPokedex]=useState([])
   const [offset,setOffset]=useState(0)
   const [limit,setLimit]=useState(20)
   
   

   console.log(pokemons)
   useEffect(()=>{
     getPokemonNames()
   },[offset])

   useEffect(()=>{
    const newList=[]
    pokemonNames.forEach((item)=>{
        axios.get(item.url).then((response)=>{
            newList.push(response.data)
            if(newList.length===20){
                const orderedList=newList.sort((a,b)=>{
                return a.id-b.id
                })
                setPokemon(orderedList)
            }
        })
        .catch((error)=>{
        console.log(error.message)
    })
    })

   },[pokemonNames])

   
   const getPokemonNames=()=>{
    axios.get(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`)
    .then((response)=>
    setPokemonNames(response.data.results)
    ).catch((error)=>{
        console.log(error.message)
    })
   

}
const goToNextPage = () => {
    setOffset(offset + 20)
    getPokemonNames()
    if(offset===1140){
        setLimit(14)
    } else{
        setLimit(20)
    }
}

const goToPrevioustPage = () => {
        setOffset(offset - 20)
        getPokemonNames()
}



   const data={pokemonNames,setPokemonNames,pokemons,setPokemon,pokedex,setPokedex,goToNextPage,goToPrevioustPage}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState