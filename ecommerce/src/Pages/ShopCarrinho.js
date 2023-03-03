import React from "react";
import styled from "styled-components";

const Carrinho = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100vh;
    width: ${props => props.status ? "400px" : "0px"};
    transition: width .5s;  
    background-color: #ccc;
    position: fixed;
    top:0;
    right: 0;
    overflow: hidden;
    padding: ${props => props.status ? "15px" : "15px 0px"};
    z-index: 996;
`;


function funcao1()
{
alert("Compra finalizada com Sucesso");
}

const ShoppingCarrinho = ({ shoppingCart,status,setStatusCart}) => {
  console.log(shoppingCart);
  return (
    <Carrinho status={status}>
      <h2>Produtos</h2>
      {shoppingCart &&
        shoppingCart.map((produtos) => {
          return (
            <div key={produtos.id}>
               <img src={produtos.imagem} />
               <p>Produto: {produtos.tittle}</p>
              <p>Valor por unidade R$ {produtos.price}</p>
              <p>Valor Total: {produtos.price*produtos.quantidade}</p>
              <p>quantidade : {produtos.quantidade}</p>
            </div>
          );
        })}
        <button onClick={()=>funcao1()}>Finalizar Compra</button>
        <br/>
        <button onClick={setStatusCart}>Voltar</button>
    </Carrinho>
  );
};

export default ShoppingCarrinho;
