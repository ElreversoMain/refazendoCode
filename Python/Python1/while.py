genero = ''

while genero != 'Sim':
    genero = str(input('Você é gay? (Sim/Não): '))


# i = 1
# while i < 6:
#   print(i)
#   i += 1
    
resp = ''    

def pergunta(resp):

    resp = input("Voce comprou um carro? (sim/não): ")

    if (resp == "sim"):
        print("Meus Parabens!")
    if (resp == "não"):
        pergunta(resp)

pergunta(resp)    


# Uma pergunta e feita, se sim ele ira termina, se não ele refaz a pergunta.

# Enquanto a resposta for não, a pergunta continuará sendo feita.
resp = input("Voce comprou uma moto também? (sim/não): ")

while resp == 'não':
    resp = input("Tem certeza? (sim/não): ")


# Uma pergunta é feita. Se a resposta for não, você é chamado de mentiroso. Se a resposta for sim, o progarma para.
