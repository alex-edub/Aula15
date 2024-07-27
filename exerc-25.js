//Contagem de Números Pares e Ímpares
//Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números pares e 
//ímpares, a média de valores pares e a média geral dos números lidos. O número que encerrará a 
//leitura será zero.

let countPares = 0;
let countImpares = 0;
let somaPares = 0;
let somaTotal = 0;
let quantidadeTotal = 0;
while (true) {
    let numero = parseFloat(prompt("Digite um número positivo (ou 0 para encerrar):"));
    if (numero === 0) {
        break;
    }
    somaTotal += numero;
    quantidadeTotal++;
    if (numero % 2 === 0) {
        countPares++;
        somaPares += numero;
    } else {
        countImpares++;
    }
}
const mediaPares = countPares > 0 ? somaPares / countPares : 0;
const mediaGeral = quantidadeTotal > 0 ? somaTotal / quantidadeTotal : 0;

console.log("Quantidade de números pares:", countPares);
console.log("Quantidade de números ímpares:", countImpares);
console.log("Média dos valores pares:", mediaPares.toFixed(2));
console.log("Média geral dos números lidos:", mediaGeral.toFixed(2));