print('Python na Escola de Programação da Alura\n')
nome = 'Pedro'
idade = 29
print(f'Meu nome é {nome} e tenho {idade} anos\n')
print('\033[31mA\033[0m')
print('L')
print('U')
print('R')
print('\033[31mA\033[0m\n')
#ou
print('A','L','U','R','A', sep='\n')

pi = 3.14159

print(f'O valor arredondado de pi é: {pi}\n')

#abordagem de f-string
print(f'O valor arredondado de pi é: {pi:.2f}\n')

#abordagem de .format()
print('O valor arredondado de pi é> {:.2f}'.format(pi))

#utilizando a função round()
print('O valor arredondado de pi é:', round(pi, 2))