const pessoas = [
  { nome: "vinicus", idade: 62 },
  { nome: "vitor", idade: 34 },
  { nome: "carlos", idade: 20 },
  { nome: "vini", idade: 24 },
  { nome: "carlinhos", idade: 25 },
];

const nomes = pessoas.map((obj) => {
  return obj.nome;
});
const idades = pessoas.map(function(obj) => {
    return obj.idade
})
console.log(nomes);
