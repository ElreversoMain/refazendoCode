import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../URL/URL";
import axios from "axios";

const GlobalState = (props) => {
  const [profile, setStateProfile] = useState([]);
  const [restaurant, setStateRestaurant] = useState([]);
  const [restaurantDetail, setStateRestaurantDetail] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeOrder, setActiveOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const GetProfiles = () => {
    const header = {
      headers: {
        auth: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };
    axios
      .get(`${BASE_URL}/profile`, header)

      .then((res) => {
        setStateProfile(res.data.user);
      })
      .catch((erro) => {
        alert("erro no GetProfiles");
      });
  };

  const GetRestaurant = () => {
    const header = {
      headers: {
        auth: window.localStorage.getItem("token"),
        "Cotent-Type": "application/json",
      },
    };
    axios
      .get(`${BASE_URL}/restaurants`, header)

      .then((res) => {
        setStateRestaurant(res.data.restaurants);
      })
      .catch((erro) => {
        alert("Erro no GetRestaurant");
      });
  };

  const GetRestaurantDetail = (id) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${BASE_URL}/restaurants/${id}`, headers)
      .then((resp) => {
        setStateRestaurantDetail(resp.data.restaurant.products);
      })
      .catch((erro) => {
        alert("Erro no HetRestaurantDetail");
      });
  };

  const postPlaceOrder = (restaurantId, method) => {
    const headers = { headers: { auth: localStorage.getItem("token") } };
    const body = {
      products: cart.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity,
        };
      }),
      paymentMethod: method,
    };
    axios
      .post(`${BASE_URL}restaurants/${restaurantId}/order`, body, headers)
      .then(() => {
        alert("Pedido Confirmado:");
        setCart([]);
        localStorage.removeItem("restaurantId");
      })
      .catch((error) => {
        if (error.includes("409")) {
          alert("pedido em andamento");
        } else if (error.includes("400") || error.message.includes("404")) {
          alert("Informações faltando");
        }
      });
  };

  const getActiveOrder = () => {
    const headers = { headers: { auth: localStorage.getItem("token") } };
    axios
      .get(`${BASE_URL}active-order`, headers)
      .then((res) => {
        setActiveOrder(res.data.order);
      })
      .catch((error) => {
        alert("erro getActiveOrder");
      });
  };

  const ordersHistory = () => {
    const headers = { headers: { auth: localStorage.getItem("token") } };
    axios
      .get(`${BASE_URL}orders/history`, headers)
      .then((respon) => {
        setOrderHistory(respon.data.orders);
      })
      .catch((error) => {
        alert("Erro no OrdersHistory");
      });
  };

  const addProduct = (product, restaurantId) => {
    const index = cart.findIndex((cartProduct) => {
      if (cartProduct.id === product.id) {
        return true;
      } else {
        return false;
      }
    });

    if (index === -1) {
      const setProduct = {
        ...product,
        quantity: 1,
      };
      const newCart = [...cart, setProduct];
      setCart(newCart);
      alert("Produto adicionado ao carrinho");
    } else {
      const newCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        } else {
          return cartProduct;
        }
      });
      setCart(newCart);
      alert("Produto adicionado ao carrinho");
    }

    localStorage.setItem("restaurantId", restaurantId);
  };
  const removeProduct = (product) => {
    const newCart = cart
      .map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity === 0,
          };
        } else {
          return cartProduct;
        }
      })

      .filter((cartProduct) => {
        if (cartProduct.quantity < 1) {
          return false;
        } else {
          return true;
        }
      });

    setCart(newCart);
  };

  const addMoreProduct = (product) => {
    const newCart = cart.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + 1,
        };
      } else {
        return cartProduct;
      }
    });

    setCart(newCart);
  };

  const removeMoreProduct = (product) => {
    const newCart = cart
      .map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        } else {
          return cartProduct;
        }
      })

      .filter((cartProduct) => {
        if (cartProduct.quantity < 1) {
          return false;
        } else {
          return true;
        }
      });

    setCart(newCart);
  };

  const data = {
    profile,
    setStateProfile,
    GetProfiles,
    GetRestaurant,
    restaurant,
    setStateRestaurant,
    restaurantDetail,
    setStateRestaurantDetail,
    GetRestaurantDetail,
    activeOrder,
    setActiveOrder,
    orderHistory,
    setOrderHistory,
    getActiveOrder,
    ordersHistory,
    addProduct,
    removeProduct,
    addMoreProduct,
    removeMoreProduct,
  };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
