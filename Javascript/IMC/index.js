const chooseWeight=Number(prompt("Digite seu peso" ))
const chooseHight=Number(prompt("Digite sua altura"))
const calculo=chooseWeight/(chooseHight*chooseHight)
console.log(`seu peso é :${chooseWeight} `)
console.log(`sua altura é ${chooseHight}`)
console.log(`calculo IMC é ${calculo}`)
if(calculo<=18){
    console.log("insuficiente")
}
else if(calculo<18.8<24.9){
    console.log("normal")
}
else if(calculo<25<29.9){
    console.log("obesidade")
}
else if(calculo<30<34.9){
    console.log("obesidade 2")
}
else if(calculo<35<39.9){
    console.log("obesidade 2")
}
else if(calculo<=40){
    console.log("obesidade 3")
}