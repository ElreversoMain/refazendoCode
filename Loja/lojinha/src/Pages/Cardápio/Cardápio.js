import React from "react";
import specialty from "../Photos2/specialty.png"
import { Container } from "./styled";
import sandwiches from "../Photos2/sandwiches.png"
import sides from "../Photos2/sides.png"
import dessert from "../Photos2/dessert.png"
import drinks from "../Photos2/drinks.png"


const Cardapio=()=>{
    return(
        <div>
            <div>
                <div>Cardapio</div>
                <Container><img src={specialty}></img><h2>Pizza</h2></Container>
                <Container><img src={sides}></img><h2>Acompanhamento</h2></Container>
                <Container><img src={sandwiches}></img><h2>sandwiches</h2></Container>
                <Container><img src={dessert}></img><h2>Sobremesa</h2></Container>
                <Container><img src={drinks}></img><h2>Bebidas</h2></Container>

            </div>
        </div>
    )
}
export default Cardapio