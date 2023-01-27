
console.log("Bem vindo !")
if((confirm)("Deseja começar ?")){
  const carta=comprarCarta()
  const cartas2=comprarCarta2()
  const carta3=comprarCarta()
  const cartas4=comprarCarta2()
  let Pontuaçaototal=carta.valor
  let pontuaçaopc=cartas2.valor
  let Pontuaçaototal2=carta3.valor
  let pontuaçaopc2=cartas4.valor
  let Pontuaçaototal3=carta.valor+Pontuaçaototal2
  let pontuaçaopc3=cartas2.valor+pontuaçaopc2
  console.log(`"Usuário - cartas:  ${Pontuaçaototal} ${Pontuaçaototal2}  - pontuação: ${Pontuaçaototal3}  "`)
  console.log(`"Computador - cartas: ${pontuaçaopc} ${pontuaçaopc2} - pontuação ${pontuaçaopc3} "`)
  if(Pontuaçaototal>pontuaçaopc){
    console.log(`Vitoria do Usuario`)
  }else if(Pontuaçaototal<pontuaçaopc){
    console.log("Vitoria do Computador")
  } else if (Pontuaçaototal===pontuaçaopc){
    console.log("Empate")
  }
 }else{
  console.log("fim de jogo")
 }


function comprarCarta2() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta
}



function comprarCarta() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const cartas2 = {
    texto: numero + naipe,
    valor: valor
  }

  return cartas2
}
