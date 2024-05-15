// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();

console.log("Jokenpô, also called Rock, Paper, Scissors, is a simple hands-on game for two or more people. Here you will play with me...the talented WillNote!");


let continuePlaying = true; //Variável para criar uma opção de continuação do jogo.
 
while(continuePlaying){ //Este é um loop "while" que continuará sendo executado enquanto "continuePlaying" for verdadeiro. Isso significa que o loop será executado até que o jogador decida parar de jogar.
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const willNoteIndex = Math.floor(Math.random() * 3); //O willNote irá buscar, de maneira aleatória, uma das opções do array para fazer a sua jogada.
    const willNoteChoice = options[willNoteIndex]; //Isso define a escolha do computador (WillNote) com base no índice aleatório gerado anteriormente.
    
    console.log("Check out the options below:");
    console.log("[ 0 ] -> ROCK; \n [ 1 ] -> PAPER; \n [ 2 ] -> SCISSORS.");

    const playerChoice = parseInt(prompt("Enter the corresponding option number:")); //Jogada do usuário

    console.log("=====================================");

    if(isNaN(playerChoice) || playerChoice < 0 || playerChoice > 2){ //Validação da entrada do usuário
        console.log("Invalid choice. Please enter a number between 0 and 2.");
        continue;    
    }

    console.log(`WillNote played: ${willNoteChoice}`);
    console.log(`You played: ${options[playerChoice]}`);

    if((playerChoice === 0 && willNoteIndex === 2) ||
       (playerChoice === 1 && willNoteIndex === 0) || 
       (playerChoice === 2 && willNoteIndex === 1)){//Determinar o vencedor.
        console.log("You win!");
    }else {
        console.log("WillNote wins!");
    }

    const playAgain = prompt("Do you want to play again?  (Y/N): ").toUpperCase();

    if(playAgain !== "Y"){ //Condição para verificar se o usuário quer continuar o jogo.
        continuePlaying = false;
    }
}

console.log("Thanks for playing!");