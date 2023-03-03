import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ShoppingCarrinho from "./ShopCarrinho";
import photohere from "../photo/photohere.jpg";
import styled from "styled-components";
import Rick from "../photo/Rick.jpg"

const Caixinha = styled.div`
width: 100%;
min-height: calc(100vh - 110px);

`;

const produtos = [
  { id: 1, title: "Homossexualien", price: 20.0, imagem: photohere },
  { id: 2, title: "Camisa do Espaço", price: 50.0, imagem: "teste" },
];

const Shopping = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [status, setStatusCart] = useState(false);
  const handleAddtoCart = (Produto) => {
    const produtos = shoppingCart.find(
      (produtos) => produtos.id === Produto.id
    );
    if (!produtos) {
      const object = {
        ...Produto,
        quantidade: 1,
      };
      return setShoppingCart([...shoppingCart, object]);
    }
    if (produtos) {
      const array = shoppingCart.map((item) => {
        if (item.id === produtos.id) {
          const object = {
            ...item,
            quantidade: item.quantidade + 1,
          };

          return object;
        }
        return item;
      });
      setShoppingCart(array);
    }
  };
  const handleRemoveFromCart = (id) => {
    const array = shoppingCart
      .map((item) => {
        if (item.id === id) {
          const object = {
            ...item,
            quantidade: item.quantidade - 1,
          };

          return object;
        }
        return item;
      })
      .filter((item) => {
        return item.quantidade > 0;
      });
    setShoppingCart(array);
  };

  console.log(shoppingCart);
  return (
    <div>
      <Header />
      <Caixinha>
        <button onClick={()=>setStatusCart(!status)}>abrir</button>
        <h2>Produtos</h2>
        <div>
          {produtos.map((produto) => (
            <div key={produto.id}>
              <p>{produto.title}</p>
              <p>R$: {produto.price}</p>
              <img src={produto.imagem} />
              <button onClick={() => handleAddtoCart(produto)}>Comprar</button>
              <button onClick={() => handleRemoveFromCart(produto.id)}>
                Remover
              </button>
            </div>
          ))}
        </div>
        <ShoppingCarrinho
          shoppingCart={shoppingCart}
          status={status}
          setStatusCart={() => setStatusCart(!status)}
        />
      </Caixinha>
      <Footer />
    </div>
  );
};

export default Shopping;
