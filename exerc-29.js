//Sequência em P.G.
//Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma sequência em P.G. contendo 10 valores.

let A = parseFloat(prompt("Digite o valor inicial (A):"));
let R = parseFloat(prompt("Digite a razão (R):"));

const numeroTermos = 10;

for (let i = 0; i < numeroTermos; i++) {
    let termo = A * Math.pow(R, i);
    console.log(`Termo ${i + 1}: ${termo}`);
}