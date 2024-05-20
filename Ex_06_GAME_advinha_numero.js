//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")();

let limitNumber = 5;

const numberChosenByTheComputer = () => {
    let computerChosenNumber = parseInt(Math.random() * limitNumber + 1);
    return computerChosenNumber;
}

let secretNumber = numberChosenByTheComputer();
//console.log(secretNumber);

const checkChoose = () => {
    let userChoice;
    while(userChoice !== secretNumber){
        userChoice = parseInt(prompt("Try to guess the secret number:"));

        if (isNaN(userChoice) || userChoice < 1 || userChoice > limitNumber) {
            console.log(`Please enter a valid number between 1 and ${limitNumber}.`);
            continue;
        }

        if(userChoice === secretNumber){
            console.log(`Congratulations! You chose the number ${userChoice} and the secret number is ${secretNumber}.`);
        }else if(userChoice > secretNumber){
            console.log(`The secret number is less than ${userChoice}!`);
        }else if(userChoice < secretNumber){
            console.log(`The secret number is more than ${userChoice}`);
        }
    }
}

checkChoose();