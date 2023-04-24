const pergunta=prompt(Number("Quantos kilometros seu carro estava andando?"))
const multa=pergunta*0.60
if(pergunta>120){
    console.log(`seu carro estava ${pergunta} então valor da multa sera ${multa} `)
} else if (pergunta <=120) 
    console.log(`meus parabens você estava ${pergunta} então nao recebera multa `) 