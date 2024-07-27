//Remoção de Elementos Duplicados de um Array

//Escreva um loop que remova todos os elementos duplicados de um array.

const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7];

const arraySemDuplicatas = [];

for (let i = 0; i < arrayComDuplicatas.length; i++) {
    const elementoAtual = arrayComDuplicatas[i];

    if (!arraySemDuplicatas.includes(elementoAtual)) {
        arraySemDuplicatas.push(elementoAtual); 
    }
}

console.log("Array com duplicatas:", arrayComDuplicatas);
console.log("Array sem duplicatas:", arraySemDuplicatas);