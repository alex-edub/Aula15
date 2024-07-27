//Cálculo do Fatorial

//Escreva um loop que calcule o fatorial de um número dado.

const numero=+prompt('Digite um número para ser fatorado: ');
let fatorial = 1;
if (numero < 0) {
    console.log("O fatorial não é definido para números negativos.");
} else {
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log("O fatorial de " + numero + " é: " + fatorial);
}