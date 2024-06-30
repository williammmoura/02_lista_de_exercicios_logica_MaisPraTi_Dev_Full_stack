/*17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/

const prompt = require("prompt-sync")();

let listNames = [];
let listAge = [];

for(i = 0; i < 9; i++){
    const inputName = prompt(`Enter with name ${i + 1}: `);
    const inputAge = prompt(`Enter with age ${i + 1}: `);
    listNames.push(inputName);
    listAge.push(inputAge);
}

console.log("List of people under 18:");

for(let i = 0; i < listNames.length; i++){//Para cada índice, verifica se a idade é menor que 18:
    if(listAge[i] < 18){
        console.log(`${listNames[i]} / ${listAge[i]}`);
    }
}

