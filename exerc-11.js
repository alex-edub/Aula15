//Menor Número em um Array

//Escreva um loop que encontre o menor número em um array.

const numeros = [5, 3, 9, 1, 6, 8, 2];
let menorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}
console.log("O menor número é: " + menorNumero);

