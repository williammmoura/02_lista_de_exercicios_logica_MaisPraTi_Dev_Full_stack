/*11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.*/

const prompt = require("prompt-sync")();

const firstTermOfArithmeticProgression = parseInt(prompt("Enter the first AP term: "));
const arithmeticProgressionRatio = parseInt(prompt("Enter AP ratio value: "))

let APTerms = [];
let sum = 0;

//Calcula os primeiros 10 termos e soma eles
for(let i = 0; i <= 10; i++){
    let term = firstTermOfArithmeticProgression + i * arithmeticProgressionRatio; //Calculo do term atual da PA
    APTerms.push(term); // Adiciona o termo calculado ao final do array "APTerms".
    sum += term; //Adiciona o valor do termo à variável sum, que mantém a soma de todos os termos.
}

//Mostra os 10 termos
console.log(`The first 10 terms of the arithmetic progression are: ${APTerms.join(", ")}`); // O método join é usado aqui para transformar o array de termos da progressão aritmética em uma string única, com cada termo separado por uma vírgula e um espaço, facilitando a exibição no console.
//Mostra a soma dos 10 termos
console.log(`The sum of the first 10 terms is: ${sum}`); 