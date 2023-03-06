//exercicio1
const pessoa={
    nome:"felipe",
    apelidos:["lipinho","fefe","felpis"]
}
console.log(`"Eu sou${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}"`)

//exercicio2
const pessoa2={
    ...pessoa,
    apelidos:["fepe","pé","pelicles"]
}
console.log(pessoa.nome,pessoa2.apelidos)

//exercicio3
const cadastro={
    nome:"Felipe Santos",
    idade:23,
    profissao:"programador"
}
console.log(cadastro.nome,cadastro.idade,cadastro.profissao)


//exercicio 4

const carrinho=[]

const fruta1={
    fruta:"maça",
    disponivel:true
}

const fruta2={
    fruta:"melancia",
    disponivel:true
}

const fruta3={
    fruta:"uva",
    disponivel:true
}

function sacolao(fruta){
    carrinho.push(fruta)
}

sacolao(fruta1)
sacolao(fruta2)
sacolao(fruta3)
console.log(carrinho)

// desafio 1
function pergunta(){
    const pergunta1=prompt("seu nome")
    const pergunta2=prompt("sua profissao")
    const pergunta3=prompt("idade")
    console.log( pergunta1,pergunta2,pergunta3)
    console.log(typeof pergunta)
   

}
pergunta()
