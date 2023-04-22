# Desafio: Calcular m² da parede e dizer quantas latas de tinta são necessárias para pintar.

# Calculando área Quadrada com Funcao
def CalcAreaQuadrada (largura, altura): 
    largura=int(input("diga sua largura: "))
    altura=int(input("digite sua altura: "))  

    AreaQuadrada = (altura * largura)
 
    return AreaQuadrada

# Calculando quantidade de Tinta para pintar a parede
def QuantTintas (area_quadrada):

    tintas = int (area_quadrada / 2)

    return tintas

# Definindo Variáveis
largura = 0
altura = 0
area_quadrada = CalcAreaQuadrada (largura, altura)
latas_tinta = QuantTintas(area_quadrada)

# Saida de Dados


print(f'A largura da sua parede é: {area_quadrada} m².') # Entrada: 2*25 | Saida: 50 m²
print(f'Você vai precisar de {latas_tinta:.2f} latas de tinta para pintar essa parede') # Saída: 25 Latas de tinta...
