import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import { Button } from "@mui/material";

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

  useEffect(() => {
    GetProfiles();
  }, []);
  useEffect(() => {
    GetRestaurant();
  }, []);

  const sumTotalCart = (param) => {
    let cartTotalPrice = param

    for (let item of cart) {
        cartTotalPrice += (item.price * item.quantity)
    }
    return cartTotalPrice.toFixed(2).replace(".", ",")
}

  const delLocalRes = () => {
    localStorage.removeItem("restaurantId");
    return <p>Carrinho Vazio</p>;
  };

  const renderAddress = restaurant.map((restaurant) => {
    if (restaurant.id === localStorage.getItem("restaurantId")) {
      return (
        <div key={restaurant.id}>
          <div>{restaurant.name}</div>
          <div>{restaurant.address}</div>
          <div>
            {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min
          </div>
        </div>
      );
    }
  });


  const renderCart = cart.map((product) => {
    return (
      <div key={product.id}>
        <div><img src={product.photoUrl}></img></div>
        <div>{product.name}</div>
        <div>{product.description}</div>
        <p><b>R${product.price.toFixed(2).replace(".",",")}</b></p>
        <div><button onClick={()=>removeMoreProduct(product)}>-</button></div>
        <div><button onClick={()=>addMoreProduct(product)}>+</button></div>
        <div><button onClick={()=>removeProduct(product)}>Remover tudo</button></div>
      </div>
      
    );
  });

  const renderShipping=restaurant.map((restaurant)=>{
    if(restaurant.id===localStorage.getItem("restaurantId")){
      return(
        <div key={restaurant.id}>
          <div>SubTotal</div>
          <p>frete R${restaurant.shipping},00</p>
          <p>R${sumTotalCart(restaurant.shipping)}</p>
        </div>
      )
    }
  })

  const confirmBtn = () => {
    if (cart.length <= 0) {
        return <Button onClick={() => alert("O carrinho está vazio")} variant="contained" color="secondary">Confirmar</Button>
    }

    else if (cart.length > 0) {
        return <Button color="primary" variant="contained" onClick={() => postPlaceOrder(localStorage.getItem("restaurantId"), paymentMethod)}>Confirmar</Button>
    }
}


  return (
    <div>
      <div>{renderCart}</div>
      <div>{renderAddress}</div>
      <div>{renderShipping}</div>
     
    </div>
  );
};
export default Cart;
