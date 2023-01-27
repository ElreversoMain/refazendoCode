// exemplo 1
let estomago=0  ;
while(estomago<=10){
    console.log(`comi ${estomago} coxinhas `)
    if(estomago===10){
        console.log("estou satisfeito")
    }
    estomago++
}
// exemplo2
let coxinha=2;
while(coxinha <=12){
    console.log(`comi ${coxinha} coxinha`)
    coxinha=coxinha+ 2
}

// exemplo3
let numeroUsuario;
let soma = 0;

while(numeroUsuario!==0){
    numeroUsuario=Number(prompt("digite"))
    soma+=numeroUsuario
   
}
console.log(soma)

// exemplo 4
let array=[11,15,18,14,12,13]
function Devolver(array){
    let maiorNumero=0
    for(let posicao=0;posicao<array.length;posicao++){
        const elemento=array[posicao]
        console.log(elemento)
        if(elemento>maiorNumero){
            maiorNumero=elemento
        }
    }
    return `o maior numero é ${maiorNumero}`
}
console.log(Devolver(array))

// exercicio1

const pergunta=prompt("quantos bichinhos voce tem ?")
if(pergunta === 0) { console.log("Que pena! Você pode adotar um pet!")}
if(pergunta>0){
    let array=[]
    for(let i=0; i<pergunta;i++){
        array.push(prompt("digite o nome "))
    }
    console.log(array)
}


