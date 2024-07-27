//Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
//A menor altura do grupo;
//A maior altura do grupo;

const alturas = [];
const totalPessoas = 15;
for (let i = 0; i < totalPessoas; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} em metros:`));
    alturas.push(altura);
}
let menorAltura = alturas[0];
let maiorAltura = alturas[0];
for (let i = 1; i < alturas.length; i++) {
    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i];
    }
    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
    }
}
console.log(`A menor altura do grupo é: ${menorAltura} metros.`);
console.log(`A maior altura do grupo é: ${maiorAltura} metros.`);