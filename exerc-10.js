//Maior Número em um Array

//Escreva um loop que encontre o maior número em um array.

const numeros = [5, 3, 9, 1, 6, 8, 2];
let maiorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}
console.log("O maior número é: " + maiorNumero);

