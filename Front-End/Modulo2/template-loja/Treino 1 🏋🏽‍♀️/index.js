function caculaSalario(){
  const quantidade=prompt("quantidade")
  const valorCarro=Number(prompt("Valor do Carro"))
  porcentagem=Number(5*valorCarro/100)
  salario=2000
  console.log(` valor do bonus ${porcentagem} e a quantidade é ${quantidade} `)
  ganho=Number(quantidade*100)
  const valorganho=porcentagem+salario+ganho
  console.log(` então valor total com  comissão ${valorganho}`)
}
caculaSalario()