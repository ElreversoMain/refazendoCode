// exercicio 1
const somar=3
const somar2=4
const resultado=somar+somar2
console.log(resultado)

// exercicio 
const multiplicar=3
const multiplicar2=5
const resultadoo=multiplicar*multiplicar2/2
console.log(resultadoo)

// exercicio 
const diminuir=(5)
const diminuir2=(4)
const diminuindo=diminuir-diminuir2*(-1)
console.log(diminuindo)

// exercicio
const numero=255
const dividoo=5
const resul=255%5

// exercicio 2 
const escolha =prompt(" digite um numero")
const outraEscolha=prompt("digite outro numero ")
const  igual=escolha===outraEscolha
const  diferente=escolha!==outraEscolha
const maior=escolha>outraEscolha
const menor=escolha<outraEscolha
console.log(igual,diferente,maior,menor)

// exercicio 3
const numero1=prompt("escolha a")
const numero2=prompt("escolha b")
const numero3=prompt("escolha c")
const ab=numero1 && numero2
const bc=numero2 && numero3
const ac=numero1 && numero3
console.log(ab,bc,ac)

// exercicio 4
const a=true
const b=false
const c=true
const aa=a || b
const bb=b||c
const cc=a||c
const dd=a||b||c
console.log(aa,bb,cc,dd)

// exercicio 5
const nome=prompt("digite seu nome ")
const ano=prompt("digite ano de seu nascimento")
const idade=prompt(" digite sua idade")
const calculo=2050-ano
const maiorIdade=idade>18
console.log("Nome:",nome,
"Idade:",idade,
"maior de idade ?",maiorIdade,
"idade em 2050:",calculo,
)