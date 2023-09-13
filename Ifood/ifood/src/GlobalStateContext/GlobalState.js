import React,{useEffect,useState} from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../URL/URL";
import axios from "axios";


const GlobalState=(props)=>{
    const [profile,setStateProfile]=useState([])
    const [restaurant,setStateRestaurant]=useState([])
    const[restaurantDetail,setStateRestaurantDetail]=useState([])
    

    const GetProfiles=()=>{
        const header={
            headers:{
                auth:window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        }
        axios
        .get(`${BASE_URL}/profile`,header)

        .then((res)=>{
            setStateProfile(res.data.user)

        })
        .catch((erro)=>{
            alert("erro no GetProfiles")
        })

    }

    const GetRestaurant=()=>{
        const header={
            headers:{
                auth:window.localStorage.getItem("token"),
                "Cotent-Type":"application/json"
            }
        }
        axios
        .get(`${BASE_URL}/restaurants`,header)

        .then((res)=>{
            setStateRestaurant(res.data.restaurants)

        })
        .catch((erro)=>{
            alert("Erro no GetRestaurant")
        })
        
    }

    const GetRestaurantDetail=(id)=>{
        const header={
            headers:{
                auth:window.localStorage.getItem("token"),
            }
        }
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/restaurants/${id}`,header)
        .then((response)=>{
            setStateRestaurantDetail(response.data.restaurant.products)
            console.log(response)
        })
        .catch((erro)=>{
            alert("Erro no HetRestaurantDetail")
        })
       
    }
  
    const data={profile,setStateProfile,GetProfiles, GetRestaurant,restaurant,setStateRestaurant,
        restaurantDetail,setStateRestaurantDetail,GetRestaurantDetail}
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
   
}

export default GlobalState;
