//Contagem de Números em Intervalos Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos 
//deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido 
//um número negativo.

let a_0_25 = 0;
let b_26_50 = 0;
let c_51_75 = 0;
let d_76_100 = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número (ou um número negativo para sair):"));
    if (numero < 0) {
        break;
    }
    if (numero >= 0 && numero <= 25) {
       a_0_25++;
    } else if (numero >= 26 && numero <= 50) {
        b_26_50++;
    } else if (numero >= 51 && numero <= 75) {
        c_51_75++;
    } else if (numero >= 76 && numero <= 100) {
        d_76_100++;
    }
}
console.log(`Quantidade de números no intervalo [0-25]: ${a_0_25}`);
console.log(`Quantidade de números no intervalo [26-50]: ${b_26_50}`);
console.log(`Quantidade de números no intervalo [51-75]: ${c_51_75}`);
console.log(`Quantidade de números no intervalo [76-100]: ${d_76_100}`);