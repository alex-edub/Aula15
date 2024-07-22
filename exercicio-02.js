const nome= prompt('Digite o nome:');
const sexo= prompt('Digite o sexo:');
const estado_civil=prompt('Digite o estado civil:');

if (sexo === 'f' && estado_civil=== "casada") {
    const tempo_casada = prompt('Digite quantos anos de casado(a) em anos')
    alert(`Olá, ${nome}! Seu sexo é ${sexo} e seu estado civil é ${estado_civil} e você tem ${tempo_casada} anos de casada.`);
}
else{
    alert(`Olá, ${nome}! Seu sexo é ${sexo} e seu estado civil é &{estado_civil}.`)
}