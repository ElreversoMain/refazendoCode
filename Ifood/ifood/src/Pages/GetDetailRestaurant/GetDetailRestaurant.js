import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import { useParams } from "react-router-dom";

const GetDetailRestaurant = () => {
  const {
    restaurant,
    setStateRestaurant,
    GetRestaurant,
    restaurantDetail,
    setStateRestaurantDetail,
    GetRestaurantDetail,
  } = useContext(GlobalStateContext);
  const { id } = useParams();
  useEffect(() => {
    GetRestaurant();
  }, []);
  useEffect(() => {
    GetRestaurantDetail(id);
  }, []);

  const renderMainProducts = restaurantDetail.map((product) => {
    if (
      product.category !== "Acompanhamento" &&
      product.category !== "Bebida"
    ) {
      return (
        <div key={product.id}>
          <div>
            <img src={product.photoUrl} alt="imagem produto"></img>
          </div>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.price.toFixed(2).replace(".", ",")}</div>
        </div>
      );
    }
  });

  const renderSideDish = restaurantDetail.map((product) => {
    if (product.category === "Acompanhamento") {
      return (
        <div key={product.id}>
          <div>
            <img src={product.photoUrl} alt="Imagem Produto"></img>
          </div>
          <div>{product.description}</div>
          <div>{product.price.toFixed(2).replace(".", ",")}</div>
        </div>
      );
    }
  });

  const renderDrinks = restaurantDetail.map((product) => {
    if (product.category === "Bebida") {
      return (
        <div key={product.id}>
          <div>
            <img src={product.photoUrl} alt="Imagem Produto"></img>
          </div>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.price.toFixed(2).replace(".", ",")}</div>
        </div>
      );
    }
  });

  return (
    <div>
      {renderMainProducts}
      {renderSideDish}
      {renderDrinks}
    </div>
  );
};
export default GetDetailRestaurant;
