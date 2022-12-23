// exercicio 1
const idade=prompt("qual sua idade ?")
const Idade=prompt("idade de outra pessoa")
const igual=idade>Idade 
const diferença=idade-Idade
console.log("Sua idade é maior do que a do seu melhor amigo?",igual,"diferença de idade é",diferença)

// exercicio 2
const escolha=prompt("escolha um numero ")
const impa=escolha % 0 
const par =escolha % 1
console.log("impar",impa, "par",par)

// exercicio 3
const escolhaIdade=prompt("qual sua idade ?")
const meses=escolhaIdade*12
const dias=escolhaIdade*365
const hora=escolhaIdade*8760
console.log(meses,dias,hora)

// exercicio4

const escolhaP=prompt("escolha um numero")
const escolhaS=prompt("escolha outro")
const maior=escolhaP>escolhaS
const iguall=escolhaP===escolhaS
const divisivel=escolhaP%escolhaS
const divisivel2=escolhaS%escolhaP
console.log(maior,iguall,divisivel,divisivel2)

// desafios 
const F=prompt("escolha grau para F")
const FF=(F-32)*(5/9)+273.15
const C=prompt("escolha celsiu")
const CC=C*(9/ 5)+32
console.log(FF,CC)