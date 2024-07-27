//Verificação de Presença de Número em um Array

//Escreva um loop que verifique se um número específico está presente em um array.

const numeros = [5, 12, 8, 23, 7];
const numeroParaVerificar = 8;
const encontrado = numeros.includes(numeroParaVerificar);
if (encontrado) {
    console.log(`O número ${numeroParaVerificar} está presente no array.`);
} else {
    console.log(`O número ${numeroParaVerificar} não está presente no array.`);
}