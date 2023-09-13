import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";

const GetRestaurant = () => {
  const{restaurant,setStateRestaurant,GetRestaurant,
    restaurantDetail,setStateRestaurantDetail,GetRestaurantDetail}=
  useContext(GlobalStateContext)
  const navigate = useNavigate();
  const {id}=useParams()

  
  useEffect(()=>{
    GetRestaurant()
  },[]);

  useEffect(()=>{
    GetRestaurantDetail(id)
  },[])

  const renderDetailsRestaurant=restaurant.map((restaurantes)=>{
    if(restaurant.id===id){
      return(
        <div key={restaurantes.id}>
          <img src={restaurantes.logoUrl}></img>
          <div>{restaurantes.name}</div>
          <div>{restaurantes.category}</div>
          <div>{restaurantes.deliveryTime} - {restaurantes.deliveryTime + 10} min</div>
          <div>frete R${restaurantes.shipping.toFixed(2).replace(".",",")}</div>
          <div>{restaurantes.address}</div>
        </div>
      )
    }
  })

  


  return (
    <div>
      <div>{renderDetailsRestaurant}</div>

      <button onClick={() => navigate("/GetProfile")}></button>
    </div>
  );
};
export default GetRestaurant;
