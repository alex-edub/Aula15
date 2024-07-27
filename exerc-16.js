//Percorrer Array de Objetos

//Escreva um loop que percorra um array de objetos e imprima uma propriedade específica de cada objeto.

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Carlos", idade: 30 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 28 }
];
for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i].nome); 
}