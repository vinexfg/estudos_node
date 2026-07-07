


class Pedido:
    def __init__(self, valor):
        self.valor = valor
        self.status = "pendente"

    def aplicar_desconto(self, porcentual):
        self.valor = self.valor - (self.valor * porcentual)    


class ProcessadorDePedidos:
    def processar_pedido(self, pedido):
        if pedido.valor > 1000:
            pedido.aplicar_descuonto(0.1)
        pedido.status = 'processando'
        return pedido

pedido1 = Pedido(1500)
processador = ProcessadorDePedidos()
pedido_final = processador.processar_pedido(pedido1)


