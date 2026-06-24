function criaPessoa(
  nome: string,
  sobrenome: string,
  altura: number,
  peso: number,
) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${sobrenome}`;
    },
    falar(assunto: string) {
      return `${this.nome} está falando sobre ${assunto}`;
    },
    altura,
    peso,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
    set nomeCompletoo(valor: string) {
      console.log(valor);
    },
  };
}

const p1 = criaPessoa("vinicus", "almeida", 1.71, 61);
console.log(p1.falar("falando sobre JS"));
p1.nomeCompletoo = "Vinicius Almeida";

