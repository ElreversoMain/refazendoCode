
# Definindo Funções

def funcao1():
    print("Vai comer Galinhas")

def funcao2():
    print("Vai comer Vacas")

def funcao3():
    print("Vai comer Piranhas")

# Definindo Dicionário

funcoes = {
    1: funcao1,
    2: funcao2,
    3: funcao3
}

# Demonstrando Cardápio

cardapio1="1- Comer galinha"
cardapio2="2- comer Boi"
cardapio3="3- comer piranha"

print(f' \n {cardapio1}\n {cardapio2}\n {cardapio3}\n ')

# Diz o que o cliente irá comer

valor = int(input(f'Escolha um dos itens do nosso cardápio: '))
funcoes.get(valor, lambda: print("Valor inválido"))()

