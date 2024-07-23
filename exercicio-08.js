const a = +prompt('Digite um número: ');
const b = +prompt('Digite um número: '); 
const c = +prompt('Digite um numero: ');

let maior = a;
if (b>maior){
    maior=b;
}
if (c>maior){
    maior=c;
}
let menor = a;
if(b<menor){
    menor = b;
}
if (c<menor){
    menor = c;
}
let meio;
if(a !== maior && a !==menor){
    meio = a;
}
else if(b!==maior && b !== menor){
    meio=b;
}
else {
    meio=c;
}
alert (maior);
alert (meio);
alert (menor);