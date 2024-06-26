/*14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/

const prompt = require('prompt-sync')();

let listNames = [];

for(let i = 0; i < 7; i++){
    const inputNames = prompt(`Enter name ${i + 1}: `);
    listNames.push(inputNames);    
}

//Mostrar nomes na ordem inversa
console.log("Names in reverse order:");
for (let i = listNames.length - 1; i >= 0; i--) {//"let i = listNames.length - 1": Inicia o índice i no último elemento do vetor.
    console.log(listNames[i]);
  }

