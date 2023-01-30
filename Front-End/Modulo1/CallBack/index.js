const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //exercicio1
 const nomes=pets.map((nomes)=>{
    return nomes.nome
 })
 console.log(nomes)
 
 //exercicio2
 const salsicha=pets.filter((salsicha)=>{
    return salsicha.raca==="Salsicha"
 })
 console.log(salsicha)

 //exercicio 3

 const poodle=pets.filter((poodle)=>{
    return poodle.raca==="Poodle"
 })
 console.log(poodle)

 //exercicio 4
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

 const nomess=produtos.map((categoria)=>{
    return categoria.nome
 })
 console.log(nomess)
 
 const desconto=produtos.map((desconto)=>{
   return `${desconto.nome} recebera desconto de ${desconto.preco/(5*100)}`
 })
 console.log(desconto)

 const bebidas=produtos.filter((bebida)=>{
   return bebida.categoria ==="Bebidas"
 })
 console.log(bebidas)

 const type=produtos.filter((ipe)=>{
   return ipe.nome.includes("Ypê")
 })
 console.log(type)

 const typee=produtos.filter((ty)=>{
   return ty.nome.includes("Ypê")
 })
 console.log(typee)

 // exercicio 5
 const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
  ]
const fogo=pokemons.filter((fogo)=>{
   return fogo.tipo ==="fogo"
})  
console.log(fogo)
const grama=pokemons.filter((grama)=>{
  return grama.tipo==="grama"
})
const agua=pokemons.filter((agua)=>{
   return agua.tipo==="água"
})
console.log(fogo,grama,agua)

const ordem=pokemons.map((ordem)=>{
   return pokemons.sort()
})
console.log(ordem)