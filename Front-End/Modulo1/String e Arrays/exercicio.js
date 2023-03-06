// exercicio 1
// const nome=prompt("qual e seu nome ?")
// const email=prompt("qual e seu email ?")
// console.log(` seu nome é ${nome} e seu email ${email}`)

// // exercicio 2 
// const comida=["hamburgue","espaguete","sorvete","cachorro-quente","Pavé"]
// console.log(comida)
// console.log(comida[0])
// console.log(comida[1])
// console.log(comida[2])
// console.log(comida[3])
// console.log(comida[4])
// const usuario=prompt("qual sua comida favorita")
// comida[1]=usuario
// console.log(comida)

// exercicio 3
const array=[]
const digite=prompt("tarefa 1")
const digite2=prompt(" tarefa 2")
const digite3=prompt("tarefa 3")
array.push(digite)
array.push(digite2)
array.push(digite3)
console.log(array)
const tarefa=prompt("digite a tarefa que voce termino")
array.splice(Number(tarefa),0)
console.log(array)

