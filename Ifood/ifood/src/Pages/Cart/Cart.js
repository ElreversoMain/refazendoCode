import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import { Button } from "@mui/material";
import {Ordenar,FixaImagem} from "../Cart/styled"
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const {
    profile,
    GetProfiles,
    GetRestaurant,
    restaurant,
    removeProduct,
    addMoreProduct,
    removeMoreProduct,
    postPlaceOrder,
    cart,
    addProduct,
  } = useContext(GlobalStateContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    GetProfiles();
  }, []);
  useEffect(() => {
    GetRestaurant();
  }, []);

  const sumTotalCart = (param) => {
    let cartTotalPrice = param;

    for (let item of cart) {
      cartTotalPrice += item.price * item.quantity;
    }
    return cartTotalPrice.toFixed(2).replace(".", ",");
  };

 
  const renderAddress = restaurant.map((restaurant) => {
    if (restaurant.id === localStorage.getItem("restaurantId")) {
      return (
        <Ordenar key={restaurant.id}>
          <div>Loja: {restaurant.name}</div>
          <div>Endereço: {restaurant.address}</div>
          <div>
            Tempo: {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min
          </div>
          <br/>
        </Ordenar>
      );
    }
  });

  const renderCart = cart.map((product) => {
    return (
      <div key={product.id}>
        <FixaImagem>
          <img src={product.photoUrl}></img>
        </FixaImagem>
        <Ordenar>{product.name}</Ordenar>
        <Ordenar>{product.description}</Ordenar>
        <Ordenar>
          <b>R${product.price.toFixed(2).replace(".", ",")}</b>
        </Ordenar>
        <Ordenar>
          <button onClick={() => removeMoreProduct(product)}>-</button>
        </Ordenar>
        <Ordenar>
          <button onClick={() => addMoreProduct(product)}>+</button>
        </Ordenar>
        <Ordenar>
          <button onClick={() => removeProduct(product)}>Remover tudo</button>
        </Ordenar>
      </div>
    );
  });

  const renderShipping = restaurant.map((restaurant) => {
    if (restaurant.id === localStorage.getItem("restaurantId")) {
      return (
        <div key={restaurant.id}>
          <Ordenar>frete R${restaurant.shipping},00</Ordenar>
          <Ordenar>Valor Total R${sumTotalCart(restaurant.shipping)}</Ordenar>
        </div>
      );
    }
  });
 
  const confirmBtn = () => {
    if (cart.length <= 0) {
        return <Button onClick={() => alert("O carrinho está vazio")} variant="contained" color="secondary">Confirmar</Button>
    }

    else if (cart.length > 0) {
        return <Button color="primary" variant="contained" onClick={() => postPlaceOrder(localStorage.getItem("restaurantId"), paymentMethod)}>Confirmar</Button>
    }
}

 

  return (
    <Ordenar>
      <div><Button onClick={()=>navigate(("/GetRestaurant"))}>Voltar</Button></div>
      <div>{renderCart}</div>
      <br/>
      <div>{renderAddress}</div>
      <br/>
      <div>{renderShipping}</div>
      <br/>
      <Ordenar>
        <form>
          <input
            id="money"
            type="radio"
            name="form-pag"
            onClick={() => setPaymentMethod("money")}
          />
          <label htmlFor="money" onClick={() => setPaymentMethod("money")}>
            Dinheiro
          </label>
          <br></br>
          <input
            id="creditcard"
            type="radio"
            name="form-pag"
            onClick={() => setPaymentMethod("creditcard")}
          />
          <label
            htmlFor="creditcard"
            onClick={() => setPaymentMethod("creditcard")}
          >
            Cartão de crédito
          </label>
        </form>
      </Ordenar>
      {confirmBtn()}
    </Ordenar>
  );
};
export default Cart;
