class Restaurante:
    nome = ''
    categoria = ''
    ativo = False
    
restautante_praca = Restaurante()
restautante_praca.nome = 'Praça'
restautante_praca.categoria = 'Gourmet'

restaurante_pizza = Restaurante()

restaurantes = [restautante_praca, restaurante_pizza]

print(vars(restautante_praca))