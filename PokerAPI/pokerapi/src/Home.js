import React,{ useEffect, useState } from "react"
import axios from "axios"

const Homer=()=>{

    useEffect(()=>{
        getPokemons();
    },[])
     
    const getPokemons=()=>{
        axios
        .get(`https://pokeapi.co/api/v2/`)
        .then((res)=>{
            console.log(res)
        })
    }
       
    
    
    // const[offset,setOffset]=useState(0);
    const [pokemon,setPokemon]=useState([])
    // const LIMIT=12;
    
    
      
    
    return(
        
        <div>
          homer
            {/* <Pagination limit={LIMIT} total={1200} offset={offset} setOffset={setOffset}/> */}
        </div>
    )
}
export default Homer