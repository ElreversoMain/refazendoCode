//exercicio 1
const idade=Number(prompt("digite sua idade"))
if(idade<18){
    console.log("nao pode dirigir ")
}
else if(idade>18){
    console.log( "pode dirigir")
}

//exercicio 2
const turno=prompt("digita seu turno")
if(turno==="M"){
    console.log("turno da manha")
} else if(turno==="V"){
    console.log("Vespertino")

} else if(turno==="N"){
    console.log("Noturno")
}

//exercicio 3
let turninho=prompt("escolha Turno M  ou V ou N")
switch (turninho) {
    case "M":
        console.log("turno da Manha")
        
        break
    case "V":
        console.log("turno da tarde")
        break
 
    case "N":
        console.log("turno da noite")
     
        break
    default:
        console.log("turno nao escolhido")
        break;
}

//exercicio 4

let filme=prompt("escolha um Filme")
let preço=prompt("preço do filme")
if(filme==="fantasia" && preço<15){
    console.log("Um Bom filme foi escolhido")
} else if (filme!="fantasia"){
    console.log("vamos assistir outro filme")

} else if (preço>15){
    console.log("muito caro")
}
    
//desafio 1

let filmee=prompt("escolha um Filme")
let preçoo=prompt("preço do filme")
if(filme==="fantasia" && preço<=15){
   const lanche=prompt("desenha comprar algum lanche ?")
    console.log(`Bom filme!
    Aproveite o seu ${lanche}`)
} else if (filmee!="fantasia"){
    console.log("vamos assistir outro filme")

} else if (preçoo>15){
    console.log("muito caro")
}

desafio 2
fiz com ajuda não consegui fazer

const nome = prompt("Digite seu nome");
const tipo = prompt("[IN]ternacional ou [DO]mestico");
const etapa = prompt("Semi-final [SF], Decisão Terceiro [DT] ou Final [FI]?");
const categoria = Number(prompt("Categoria 1, 2, 3 ou 4?"));
const quantidade = Number(prompt("Quantidade de ingressos?"));

let precoUnitario;

switch (etapa) {
  case "SF":
    switch (categoria) {
      case 1:
        precoUnitario = 1320;
        break;
      case 2:
        precoUnitario = 880;
        break;
      case 3:
        precoUnitario = 550;
        break;
      case 4:
        precoUnitario = 220;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "DT":
    switch (categoria) {
      case 1:
        precoUnitario = 660;
        break;
      case 2:
        precoUnitario = 440;
        break;
      case 3:
        precoUnitario = 330;
        break;
      case 4:
        precoUnitario = 170;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "FI":
    switch (categoria) {
      case 1:
        precoUnitario = 1980;
        break;
      case 2:
        precoUnitario = 1320;
        break;
      case 3:
        precoUnitario = 880;
        break;
      case 4:
        precoUnitario = 330;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  default:
    break;
}

if (tipo === "IN") {
  precoUnitario = precoUnitario * 4.1;
}

let textoTipo;
if (tipo === "DO") {
  textoTipo = "Doméstico";
} else if (tipo === "IN") {
  textoTipo = "Internacional";
} else {
  textoTipo = "Erro";
}

let textoEtapa;
switch (etapa) {
  case "SF":
    textoEtapa = "Semi-Final";
    break;
  case "DT":
    textoEtapa = "Decisão Terceiro";
    break;
  case "FI":
    textoEtapa = "Final";
    break;
  default:
    textoEtapa = "Erro";
    break;
}

// Saídas
console.log("---Dados da compra---");
console.log("Nome do cliente:", nome);
console.log("Tipo do jogo:", textoTipo);
console.log("Etapa do Jogo:", textoEtapa);
console.log("Categoria:", categoria);
console.log("---Valores--- ");
console.log("Valor do Ingresso:", precoUnitario);
console.log("Valor Total da Compra:", precoUnitario * quantidade);
