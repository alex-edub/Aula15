//Escreva um algoritmo que leia um valor inicial A e imprima a sequência de valores do cálculo de A! e o seu resultado.
// Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120.

let A = parseInt(prompt("Digite um valor para calcular o fatorial (A):"));
if (A < 0) {
    console.log("O valor deve ser um número não-negativo.");
} else {
    let resultado = 1;
    let sequencia = "";
    for (let i = 1; i <= A; i++) {
        resultado *= i;
        sequencia += i;
        if (i < A) {
            sequencia += " x ";
        }
    }
    console.log(`Sequência de multiplicações: ${sequencia}`);
    console.log(`Resultado de ${A}! = ${resultado}`);
}