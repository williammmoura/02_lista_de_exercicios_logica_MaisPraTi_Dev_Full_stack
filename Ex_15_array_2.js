/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

const prompt = require('prompt-sync')();

let numberList = [];

for(i = 0; i < 10; i++){
    const userInputNumber = parseInt(prompt('Enter a numeric value: '));
    numberList.push(userInputNumber);
}

console.log('The even numbers that were entered are:');
let hasEvenNumbers = false; //Verificar se algum número par foi encontrado. Inicialmente, é definida como "false".


for(let i = 0; i < numberList.length; i++){ //Número na posição i é par (um número é par se o resto da divisão por 2 for igual a 0).
    if(numberList[i] % 2 === 0){
        console.log(`Number: ${numberList[i]} at position: ${[i]}`);
        hasEvenNumbers = true; //Definido como true para indicar que pelo menos um número par foi encontrado.
    }
}

if(!hasEvenNumbers){
    console.log('No even numbers were entered.');
}