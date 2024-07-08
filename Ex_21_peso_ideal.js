/*21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

const prompt = require('prompt-sync')();

const idealWeight = (heigth, gender) => {
    if(gender === 0){
        return 62.1 * heigth - 44.7; 
    }else if(gender === 1){
        return 72.7 * heigth - 58;
    }else{
        return null;
    }
}

console.log(`Check out the options below:`);
console.log(`"[ 0 ] -> Female; \n [ 1 ] -> Male;`);

let inputHeight;
let inputGender;
let validationInputHeight = false;
let validationEntryGender = false;

//Validação da entrada
while(!validationInputHeight || !validationEntryGender){

    if(!validationEntryGender){
        inputGender = parseInt(prompt('Enter the corresponding option number:'));
        if(isNaN(inputGender) || (inputGender !== 0 && inputGender !== 1)){
            console.log(`Please enter 0 for Female or 1 for Male.`);
        }else{
            validationEntryGender = true;
        }
    }

    if(!validationInputHeight){
        inputHeight = parseFloat(prompt('Enter the height: '));
        if(isNaN(inputHeight) || inputHeight <= 0){
            console.log(`Please enter a valid numeric value for height.`);
        }else{
            validationInputHeight = true;
        }
    }
}

//Cálculo do peso ideal
const idealWeightResult = idealWeight(inputHeight, inputGender);

//Verificação do cálculo
if(idealWeightResult !== null){
    console.log(`The ideal weight is: ${idealWeightResult.toFixed(2)} kg`);
}else{
    console.log(`Invalid gender option.`);
}