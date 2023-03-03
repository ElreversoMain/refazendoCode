import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ShoppingCarrinho from "./ShopCarrinho";
import photohere from "../photo/photohere.jpg";
import styled from "styled-components";
import alien from "../photo/alien.webp";
import Rick from "../photo/Rick.png";
import camisa from "../photo/camisa.png";
import camisa2 from "../photo/camisa2.png";
import camisa3 from "../photo/camisa3.png";
import camisa4 from "../photo/camisa4.png";
import camisa5 from "../photo/camisa5.png";
import camisa6 from "../photo/camisa6.png";
import casaco2 from "../photo/casaco2.png";
import casaco3 from "../photo/casaco3.png";
import casaco4 from "../photo/casaco4.png";
import camisa7 from "../photo/camisa7.png";
import casaco from "../photo/casaco.png";

const Caixinha = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
`;

const ContainerCompra = styled.button`
  border-radius: 5px;
  img {
    height: 25px;
    width: 25px;
  }
`;
const ContainerPC = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin: 20px;
  p {
    padding-left: 40px;
  }
  img {
    height: 150px;
    width: 150px;
    mix-blend-mode: multiply;
    display: block;
  }
`;
const Alinhar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const produtos = [
  { id: 1, title: "Homossexualien", price: 20.0, imagem: photohere },
  { id: 2, title: "Camisa do Espaço", price: 50.0, imagem: alien },
  { id: 3, title: "Rick and Morthy", price: 100, imagem: Rick },
  { id: 4, title: "I need more space", price: 75, imagem: camisa },
  { id: 5, title: "Pink Nasa", price: 60, imagem: camisa2 },
  { id: 6, title: "Chookity pok", price: 120, imagem: camisa3 },
  { id: 7, title: "Space Girl", price: 69, imagem: camisa4 },
  { id: 8, title: "1977 Voyager", price: 150, imagem: camisa5 },
  { id: 9, title: "Nasa Camisa Branca", price: 100, imagem: camisa6 },
  { id: 10, title: "Camisa Girl Space", price: 75, imagem: camisa7 },
  { id: 11, title: "Casaco Preto Nasa", price: 200, imagem: casaco },
  { id: 12, title: "Homossexualien", price: 300, imagem: casaco2 },
  { id: 13, title: "Homossexualien Casaco Preto", price: 300, imagem: casaco3 },
  { id: 14, title: "Space Astronaut", price: 275, imagem: casaco4 },
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
        <ContainerCompra onClick={() => setStatusCart(!status)}>
          {" "}
          <img src="https://cdn-icons-png.flaticon.com/512/5087/5087847.png" />
        </ContainerCompra>
        <h2>Produtos</h2>
        <ContainerPC>
          {produtos.map((produto) => (
            <div key={produto.id}>
              <Alinhar>{produto.title}</Alinhar>
              <Alinhar>
                <img src={produto.imagem} />
              </Alinhar>
              <Alinhar>R$: {produto.price}</Alinhar>
              <Alinhar>
                <button onClick={() => handleAddtoCart(produto)}>
                  Comprar
                </button>
              </Alinhar>
              <Alinhar><button onClick={() => handleRemoveFromCart(produto.id)}>
                Remover
              </button></Alinhar>
            </div>
          ))}
        </ContainerPC>
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
