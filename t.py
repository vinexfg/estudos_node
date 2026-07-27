class PaymentProcessor:
    def process_payment(self, amount: float) -> str:
        if amount <= 0:
            raise ValueError("O valor do pagamento deve ser positivo.")
        self.validate(amount)
        return f"Pagamento de R${amount:.2f} processado."


class CreditCardProcessor(PaymentProcessor):
    def validate(self, amount: float):
        if amount > 1000:
            raise ValueError("limite ta cheio")

def handle_payment(processor: PaymentProcessor, amount: float) -> None:
    print(processor.process_payment(amount))


default_processor = PaymentProcessor()
credit_card_processor = CreditCardProcessor()

handle_payment(default_processor, 20000)


handle_payment(credit_card_processor, 20000)
