//Contagem de Vogais

//Escreva um loop que percorra uma string e conte o número de vogais.

let texto = prompt("Exemplo de string com várias vogais: ");

let contagemVogais = 0;

const vogais = "aeiouAEIOU";

for (let i = 0; i < texto.length; i++) {
    
    if (vogais.includes(texto[i])) {
        contagemVogais++;
    }
}
console.log("Número de vogais: " + contagemVogais);