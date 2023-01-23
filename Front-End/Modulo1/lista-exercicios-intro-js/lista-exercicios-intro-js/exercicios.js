// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura=Number(prompt("altura"))
  const largura=Number(prompt("largura"))
  const resultado=altura*largura
  console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoatual=Number(prompt("anoatual"))
  const idade=Number(prompt("anoNascimento"))
  const result=anoatual-idade
  console.log(result)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 const nome=prompt("nome")
 const idade=prompt("idade")
 const email=prompt("email")
 console.log(`Meu nome e ${nome}, tenho ${idade} anos , e o meu email e ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const digite=prompt("cor 1")
  const digite2=prompt("cor2")
  const digite3=prompt("cor3")
  const array=[digite,digite2,digite3]
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
  

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const preco=custo
  const ingresso=valorIngresso
  return preco/ingresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.legth === string2.length
 


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
  //return array[array.length-1]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  // precisei de ajuda 
  const primeiro=retornaPrimeiroElemento(array)
  const segundo=retornaUltimoElemento(array)

  array=array[0]=segundo
  array=[array.length-1]=primeiro
  return array
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase.toLowerCase===string2.toUpperCase.toLowerCase

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}