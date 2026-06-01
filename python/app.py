import gc

class Pessoa:
    def __init__(self, nome):
        self.nome = nome
        print(f"{nome}, foi criada na memoria")

    def __del__(self):
        print(f"{nome} foi apagada da memoria")


p = Pessoa("Maria")
P = Pessoa("joao")


gc.collect()