import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import {CaixaPai,Imagem,Dados,Button} from "../GetRestaurant/Styled"

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
        <CaixaPai
          key={restaurantes.id}
          onClick={() => chooseRestaurant(restaurantes.id)}
        >
          <Imagem src={restaurantes.logoUrl}></Imagem>
          <Dados>
          <div>Restaurante: {restaurantes.name}</div>
          <div>Categoria: {restaurantes.category}</div>
          <div> Tempo de Entrega: {restaurantes.deliveryTime} - {restaurantes.deliveryTime + 10} min
          </div>
          <div>
            Frete R${restaurantes.shipping.toFixed(2).replace(".", ",")}
          </div>
          <div> Endereço: {restaurantes.address}</div>
          </Dados>
          <br/>
          
        </CaixaPai>
      );
    }
  });

  return (
    <div>
      <Button onClick={()=>navigate("/")}>Voltar</Button>
      <div>{renderDetailsRestaurant}</div>
       
      <Button onClick={() => navigate("/GetProfile")}>Cadastro Perfil</Button>
      <Button onClick={()=>navigate("/Cart")}>Compras</Button>
    </div>
  );
};
export default GetRestaurant;
