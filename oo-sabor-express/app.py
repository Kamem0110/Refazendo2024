from modelo.restaurante import Restaurante

restaurante_praca = Restaurante('praça','gourmet')
restaurante_praca.receber_avalicao('Pe', 5)
restaurante_praca.receber_avalicao('Gui', 4)
restaurante_praca.receber_avalicao('Emy', 5)
#restaurante_mexicano = Restaurante('Mexican Food','Mexicana')
#restaurante_japones = Restaurante('Japa','Japonesa')

#restaurante_mexicano.alternar_estado()

def main():
    Restaurante.listar_restaurantes()

if __name__ == '__main__':
    main()