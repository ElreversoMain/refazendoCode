import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import { useParams } from "react-router-dom";
import {ImagemGlobal,Informacao,Button } from "../GetDetailRestaurant/Styled"
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();


  const renderMainProducts = restaurantDetail.map((product) => {
    if (
      product.category !== "Acompanhamento" &&
      product.category !== "Bebida"
    ) {
      return (
        <div key={product.id}>
          <ImagemGlobal >
            <img src={product.photoUrl} alt="imagem produto"></img>
          </ImagemGlobal >
          <Informacao>
          <div>Produto: {product.name}</div>
          <div>Descrição: {product.description}</div>
          <div>Preço: R${product.price.toFixed(2).replace(".", ",")}</div>
          <br/>
          <Button onClick={()=>addProduct(product,id)}>Adicionar</Button>
          </Informacao>
        </div>
      );
    }
  });

  const renderSideDish = restaurantDetail.map((product) => {
    if (product.category === "Acompanhamento") {
      return (
        <div key={product.id}>
          <ImagemGlobal >
            <img src={product.photoUrl} alt="Imagem Produto"></img>
          </ImagemGlobal >
          <Informacao>
          <div>{product.description}</div>
          <div>R$ {product.price.toFixed(2).replace(".", ",")}</div>
          <br/>
          <Button onClick={()=>addProduct(product,id)}>Adicionar</Button>
          </Informacao>
        </div>
      );
    }
  });

  const renderDrinks = restaurantDetail.map((product) => {
    if (product.category === "Bebida") {
      return (
        <div key={product.id}>
          <ImagemGlobal >
            <img src={product.photoUrl} alt="Imagem Produto"></img>
          </ImagemGlobal >
          <Informacao>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>R$ {product.price.toFixed(2).replace(".", ",")}</div>
          <br/>
          <Button onClick={()=>addProduct(product,id)}>Adicionar</Button>
          </Informacao>
          
        </div>
      );
    }
  });

  return (
    <div>
      <div><Button onClick={()=>navigate("/GetRestaurant")}>Voltar</Button></div>
      <Informacao><h2>Comida</h2></Informacao>
      {renderMainProducts}
      <Informacao><h2>Acompanhamento</h2></Informacao>
      {renderSideDish}
      <Informacao><h2>Bebida</h2></Informacao>
      {renderDrinks}
    </div>
  );
};
export default GetDetailRestaurant;
