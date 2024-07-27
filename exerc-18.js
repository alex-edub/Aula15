//Cópia de Elementos de um Array

//Escreva um loop que copie todos os elementos de um array para outro array.

array = [1,2,3,4,5,6,7];
const ArrayCopia = [];
for(let i = 0; i < array.length;i++){
    ArrayCopia.push(array[i]);
}
console.log("Array original: ", array);
console.log ("ArrayCopia: ", ArrayCopia);
