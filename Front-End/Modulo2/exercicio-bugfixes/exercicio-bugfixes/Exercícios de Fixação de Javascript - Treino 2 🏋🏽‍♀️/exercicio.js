//Você foi contratado/a para fazer o sistema de cálculo de notas de uma escola. Crie uma função que receba 3 parâmetros: nota da primeira prova (`p1`), nota da segunda prova (`p2`) e nota dos exercícios (`ex`).
//Seus sistema deve calcular a média ponderada desses três valores, onde os exercícios tem peso 1, a primeira prova tem peso 2 e a segunda prova tem peso 3.
//Ao final, você deve retornar um conceito (A, B, C, D):
//e a média for maior ou igual a 9, retorne o conceito A
//Se a média for menor que nove e maior ou igual a 7.5, retorne B
//Se a média for menor que 7.5 e maior ou igual a 6, retorne C
//Se a média for menor que 6, retorne D
const nota1=Number(prompt("nota1"))
const nota2=Number(prompt("nota2"))
const exercicio=Number(prompt("exercicio"))
let result=(nota1+nota2+exercicio)/3
if(result >=9){
    console.log(` sua nota foi ${result} então tiro A`)
}
else if(result>=7.5){
    console.log(`sua nota foi ${result} então tiro B`)
}
else if(result>=6){
    console.log(`sua nota foi ${result} então sua nota foi C`)
}
else if (result>6){
    console.log(`sua nota foi ${result} então tirou D`)
}
else if(result<6){
    console.log(`sua nota foi ${result} então foi F`)
}
