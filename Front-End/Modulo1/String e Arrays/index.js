// exercicio 1 
const nome=prompt("Digite seu nome")
const cor=prompt("Digite uma cor ")
console.log("(o)a"+nome+" tem como a cor favorita"+cor)
console.log(`a cor favorita do ${nome} é ${cor}`)

// exercicio 2
const digite=prompt("digite alguma coisa ")
const lower=digite.toLowerCase()
const upper=digite.toUpperCase()
const novafrase=digite.replaceAll("a,e,o,u","i")
console.log(`frase digitada ${digite} , lower ${lower} ,upper ${upper}
${novafrase} ${digite.length}`)

exercicio 3
const array=["buldogue","labrador","pastor-Alemão","sarsicha","golden"]
const escolha=Number(prompt("escolha um numero"))
const conta=escolha-1
console.log(array[conta])

// exercicio 4 
const array=[1,2,3,4,5,6]
array.push(7)
const tamanho=array.length
const remover=array.splice(4,5)
const novoTamanho=array.length
console.log(array,novoTamanho,tamanho)
