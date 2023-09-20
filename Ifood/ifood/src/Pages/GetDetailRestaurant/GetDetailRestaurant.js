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
    addProduct
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
          <div>R$ {product.price.toFixed(2).replace(".", ",")}</div>
          <button onClick={()=>addProduct(product,id)}>Adicionar</button>
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
          <div>R$ {product.price.toFixed(2).replace(".", ",")}</div>
          <button onClick={()=>addProduct(product,id)}>Adicionar</button>
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
          <div>R$ {product.price.toFixed(2).replace(".", ",")}</div>
          <button onClick={()=>addProduct(product,id)}>Adicionar</button>
        </div>
      );
    }
  });

  return (
    <div>
      <h1>Comida</h1>
      {renderMainProducts}
      <h1>Acompanhamento</h1>
      {renderSideDish}
      <h1>Bebida</h1>
      {renderDrinks}
    </div>
  );
};
export default GetDetailRestaurant;
