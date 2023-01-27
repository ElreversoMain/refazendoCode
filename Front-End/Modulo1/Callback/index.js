//exemplo1 
const verificarPar=(numero,imprimir)=>{
    if(numero %2 ===0){
        const resultado=numero/2
        imprimir(resultado)

    }
}
verificarPar(4,(valor)=>{
    console.log(valor)
})

//exemplo 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
   ]
   const pegarProduto=((pegando)=>{
    return pegando.nome
    
   })
   const pegardeNovo=((peguei)=>{
    return peguei.categoria
   })
   const nomeado=produtos.map(pegarProduto)
   console.log(nomeado)

   const categorias=produtos.map(pegardeNovo)
   console.log(categorias)

//exemplo3

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
   ]

 const pegarNome=((pegar)=>{
    return pegar.nome
 })

 const grama=pokemons.filter((grama)=>{
    return grama.tipo==="fogo"
 })
 console.log(grama)

   const nomes=pokemons.map(pegarNome)
   console.log(nomes)

   const tipoPokemons=pokemons.map((item,indice)=>{
    return `${item.nome},${item.tipo}`
   })
   console.log(tipoPokemons)

//exercicio1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const nomes=pets.map((nome,index)=>{
    return nome.nome
 })
 console.log(nomes)

 const raca=pets.filter((raca,index)=>{
    return raca.raca==="Salsicha"
 })
 console.log(raca)

 const desconto=pets.filter((raca)=>{
    return raca.raca==="Poodle"
    
 })

 //exercicio 2
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const nomess=produtos.map((nomes)=>{
    return nomes.nome
 })
 console.log(nomess)
 
 const bebidas=produtos.filter((bebida)=>{
    return bebida.categoria==="Bebidas"
 })
 console.log(bebidas)

 const compre=produtos.map((compra)=>{
    return `Compre ${compra.nome}  por R$${compra.preco}`
 })
 console.log(compre)

 const descontoo=produtos.map((descontoo)=>{
    return `nome ${descontoo.nome} com ${descontoo.preco} com 5% desconto ${descontoo.preco*(5/100)}`
 })
console.log(descontoo)

 const produtosYpe = produtos.filter((prod) => {
   return prod.nome.includes("Ypê");
});
console.log(produtosYpe)