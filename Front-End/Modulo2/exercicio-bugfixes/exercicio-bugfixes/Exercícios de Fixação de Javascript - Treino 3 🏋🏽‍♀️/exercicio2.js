//Enunciado As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12. 
//Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.

const quantidade=Number(prompt("Escolha quantidade de maçã"))
maça=1.30
desconto=1
if(quantidade<12){
    console.log(maça*quantidade)
}
else if(quantidade>=12){
    console.log(desconto*quantidade)
}
console.log(maça*quantidade)