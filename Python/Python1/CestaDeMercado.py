cesta = ['maça', 'banana', 'pera', 'uva']

for fruta in cesta:
    print(fruta)

"""
[] --> Lista | Liberal
() --> Tupla | Centro
{} --> Dicionario | Conservador
"""

palavra="vamos estudar python"

for letra in palavra:
    print(letra)

print(palavra[2:5])



for n in range(3):
    print(f'{n + 1} La ele...')


# vou fazer uma pergunta ele vai responder ela mas eu poderia trocar o nome exemplo
# seja bem vindo felipe, Seja bem vindo Enderson 

def definir_nome(nome):
    nome= str(input('Digite seu nome: '))
    return nome

nome = ''


for repetir in range(5):
    nome = definir_nome(nome)
    print(f"Seja Bem-vindo, {nome}!")

for i in range(30): # i --> iterator
    print(f'Que coxinha gostosa, já comi {i + 1}!')
    
    if i == 29:
        print('Comi pkrlh!')
    elif i == 15:
        print('Acho que comi metade do pacote...')
    else:
        print('Manda mais!')


