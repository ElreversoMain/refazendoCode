import React from "react";
import styled from "styled-components";
// colocar botão remover somente quando não estiver no carrinho
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
    overflow-y: scroll;
   .scroll::-webkit-scrollbar{
    width: 10px;
    border: 1px solid rgb(192,0,75);
   }
    
    img{
      height:50px;
      width: 50px;
      mix-blend-mode: multiply;
      border-radius: 15px;
      
    
    }

    button{
        font-size:1rem;
        background-color:transparent;
        border:none;
        cursor:pointer;
        padding:3px;
        border-radius:10px;
        &:hover{
            background-color: rgb(0,0,0,0.3);   
        }
        &:active{
            color:white;
            background-color:red;
        }
    }
`;




function funcao1()
{
alert("Compra finalizada com Sucesso");
}



const ShoppingCarrinho = ({ shoppingCart,status,setStatusCart}) => {
  console.log(shoppingCart);

  const totalcart=shoppingCart.length >0 && shoppingCart.reduce((total,current)=>{
    return total + (current.price*current.quantidade)
  },0)

 console.log(totalcart)
  return (
    <Carrinho status={status}>
      <h2>Produtos</h2>
      {shoppingCart &&
        shoppingCart.map((produtos) => {
          return (
            <div key={produtos.id}>
               <img src={produtos.imagem} />
               <p>Produto: {produtos.title}</p>
              <p>Valor por unidade R$ {produtos.price}</p>
              <p>Valor Total: {produtos.price*produtos.quantidade}</p>
              <p>quantidade : {produtos.quantidade}</p>
            </div>
          );
        })}
        <div> Total: {totalcart}</div>
        <button onClick={()=>funcao1()}>Finalizar Compra</button>
        <br/>
        <button onClick={setStatusCart}>Voltar</button>
       
    </Carrinho>
  );
};

export default ShoppingCarrinho;
