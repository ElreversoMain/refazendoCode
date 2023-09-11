import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";

const GetRestaurant = () => {
  const{restaurant,setStateRestaurant,GetRestaurant}=
  useContext(GlobalStateContext)
  const navigate = useNavigate();
  
  useEffect(()=>{
    GetRestaurant()
  },[]);
  

  return (
    <div>
      <div>{restaurant.category}</div>
      

      <button onClick={() => navigate("/GetProfile")}></button>
    </div>
  );
};
export default GetRestaurant;
