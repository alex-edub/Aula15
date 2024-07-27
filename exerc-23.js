//Média Aritmética e Percentual de Valores
//Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos,
 //a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.


let soma = 0;
let quantidadeValores = 0;
let quantidadePositivos = 0;
let quantidadeNegativos = 0;
while (true) {
    let valor = parseFloat(prompt("Digite um valor (ou digite 0 para sair):"));
    if (valor === 0) {
        break;
    }
    soma += valor;
    quantidadeValores++;
    if (valor > 0) {
        quantidadePositivos++;
    } else if (valor < 0) {
        quantidadeNegativos++;
    }
}
const media = soma / quantidadeValores;
const percentualPositivos = (quantidadePositivos / quantidadeValores) * 100;
const percentualNegativos = (quantidadeNegativos / quantidadeValores) * 100;
console.log("Média aritmética dos valores:", media.toFixed(2));
console.log("Quantidade de valores positivos:", quantidadePositivos);
console.log("Quantidade de valores negativos:", quantidadeNegativos);
console.log("Percentual de valores positivos:", percentualPositivos.toFixed(2) + "%");
console.log("Percentual de valores negativos:", percentualNegativos.toFixed(2) + "%");