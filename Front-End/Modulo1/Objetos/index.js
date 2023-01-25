// exemplo 1
 
const filme={
    nome:"fuga das galinhas",
    ano:2000,
    elencos:["diretor produtor Felipe Santos"],
    funcao:()=>{
        console.log("Filme escolhido")
    }

}
console.log(filme)
console.log(filme.nome)
console.log(filme.ano)
console.log(filme.elencos)
console.log(filme["nome"])
console.log(filme["ano"])
console.log(filme["elencos"])

//exemplo 2
 const pessoa={
    nome:"Felipe Santos",
    idade:23,
    musica:"welcome to the jungle",

 }
console.log(`o Nome da pessoa é ${pessoa.nome} ela tem ${pessoa.idade} anos e gosta de ${pessoa.musica}`)

//exemplo 3
const filme2={
    ...filme,
    nome1:"clarinha",
    nome2:"isaac",
    nome3:"netero"
}
console.log(filme2)

//EXEMPLO 3 
const objeto={
    comidas:["banana","maça","uva"],
    nome:"carlinhos",
    idade:21,
    melhoramigo:{
        nome:"vinicius",
        idade:44

    }
}
console.log(`o nome da pessoa é ${objeto.nome}e suas comidas favoritas ${objeto.comidas} e seu melhor amigo se chama ${objeto.melhoramigo.nome} e tem ${objeto.melhoramigo.idade}`)