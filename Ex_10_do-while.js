/*10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

const prompt = require('prompt-sync')();

let sumOfUserValues = 0;
let userInputNumber;
let continueEnterMoreNumbers = false; //como flag para continuar ou parar o loop. Inicialmente, a flag "continueEnterMoreNumbers" é definida como false, indicando que o loop não deve continuar executando.
let minValue = Infinity; //para armazenar o menor valor digitado, inicializado com Infinity.
let countValues = 0; //para contar quantos números foram digitados.
let countEvenNumbers = 0; //para contar quantos números pares foram digitados.

do{
    userInputNumber = parseInt(prompt('Enter a numeric value: ')); 
    
    //Atualizar o somatório
    sumOfUserValues += userInputNumber;

    //Verificar e atualizar o menor valor
    if(userInputNumber < minValue){
        minValue = userInputNumber;
    }

    //Atualizar contagem de valores digitados
    countValues++;

    //Verificar e atualizar contagem de números pares
    if(userInputNumber % 2 === 0){
        countEvenNumbers++;
    }

    //Perguntar se o usuário que continuar
    let userResponse = prompt("You have to enter more numbers? (yes/no) ").toLowerCase();
    if(userResponse !== "yes"){ //O loop "do-while" executa o bloco de código dentro do "do" pelo menos uma vez e continua repetindo enquanto a condição no while for false.
        //Se a resposta for diferente de "yes", a flag continueEnterMoreNumbers é definida como true:
        continueEnterMoreNumbers = true;
    }
}while(!continueEnterMoreNumbers){
    //Cálculo da média dos valores fornecidos pelo usuário
    let average = sumOfUserValues / countValues;

    console.log(`Sum of values: ${sumOfUserValues}`);
    console.log(`Lowest value entered: ${minValue}`);
    console.log(`Average of values: ${average}`);
    console.log(`Number of even values: ${countEvenNumbers}`);
}