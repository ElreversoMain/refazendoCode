import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";

const GetRestaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const {
    restaurant,
    setStateRestaurant,
    GetRestaurant,
    restaurantDetail,
    setStateRestaurantDetail,
    GetRestaurantDetail,
  } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    GetRestaurant();
  }, []);

  const chooseRestaurant = (param) => {
    navigate(`/GetDetailRestaurant/${param}`);
  };

  const renderDetailsRestaurant = restaurant.map((restaurantes) => {
    if (restaurant.id === id) {
      return (
        <div
          key={restaurantes.id}
          onClick={() => chooseRestaurant(restaurantes.id)}
        >
          <img src={restaurantes.logoUrl}></img>
          <div>{restaurantes.name}</div>
          <div>{restaurantes.category}</div>
          <div>
            {restaurantes.deliveryTime} - {restaurantes.deliveryTime + 10} min
          </div>
          <div>
            frete R${restaurantes.shipping.toFixed(2).replace(".", ",")}
          </div>
          <div>{restaurantes.address}</div>
        </div>
      );
    }
  });

  return (
    <div>
      <div>{renderDetailsRestaurant}</div>

      <button onClick={() => navigate("/GetProfile")}></button>
    </div>
  );
};
export default GetRestaurant;
