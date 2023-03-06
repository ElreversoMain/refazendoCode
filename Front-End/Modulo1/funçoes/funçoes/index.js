// exemplo 1
function helloworld(){
    console.log("Hello world!")
}
helloworld()
//exemplo 2
function nomes(){
    const nome=prompt("digite um nome")
    const nome2=prompt("digite um nome")
    const nome3=prompt("digite um nome")
    console.log(`Ola ${nome}`)
    console.log(`Ola ${nome2}`)
    console.log(`Ola ${nome3}`)
}
nomes()

//exercicio 1
const nome="felipe"
const idade=22
const cidade="rio de Janeiro"
function retorna(){
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} `)
}
retorna()

//exercicio 1.B
function retornando(nome,idade,profissao){
    console.log(`eu sou ${nome}, tenho ${idade} e minha profissao ${profissao}`)
}
retornando("felipe",22,"programador")


//exercicio 2

function receber(numero,numero3){
    return numero+numero3
}
function boolean(numero,numero3){
    return numero<numero3
}
function par(numero){
    return numero%2===0
}
function retornaTamanho(texto) {
	return `${texto.length}, ${texto.toUpperCase()}`
}
const escolha=prompt("escolha um numero")
const escolha2=prompt("escolha outro numero")
const textinho=prompt("escolha um texto")
console.log(receber(escolha,escolha2))
console.log(boolean(escolha,escolha2))
console.log(par(escolha))
console.log(retornaTamanho(textinho))







//exercicio 3

function somar(numero1,numero2){
    return numero1+numero2
}
function subtrair(numero1,numero2){
    return numero1-numero2
}
function multiplicar(numero1,numero2){
    return numero1*numero2
}
function dividir(numero1,numero2){
    return numero1/numero2
}
function maior(numero1,numero2){
    return numero1<numero2
}
function menor(numero1,numero2){
    return numero1>numero2
}
const primeiro=prompt("Escolha um numero")
const segundo=prompt("escolha segundo")
console.log(somar(primeiro,segundo))
console.log(subtrair(primeiro,segundo))
console.log(multiplicar(primeiro,segundo))
console.log(dividir(primeiro,segundo))
console.log(maior(primeiro,segundo))
console.log(menor(primeiro,segundo))
somar()