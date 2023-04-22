# Definindo variáveis
velocidade = 0
multa = 0

# Função Calculando
def Calculando(velocidade):
     
     velocidade=int(input("Digite velocidade que seu carro percorreu: "))
     multa=velocidade*0.60

     if(velocidade>120):
         return print(f"valor da sua {multa} ira ser")
     else:
        return print('Você não foi multado, zé!')

        
print(Calculando(velocidade))
