//Percorrer Propriedades de um Objeto

//Escreva um loop que percorra um objeto e imprima todas as suas chaves e valores.

const pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "Fortaleza",
    profissao: "Desenvolvedora"
};
Object.keys(pessoa).forEach(chave => {
    console.log(`Chave: ${chave}, Valor: ${pessoa[chave]}`);
});