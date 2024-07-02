/*19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/

const prompt = require('prompt-sync')();

const isValidTime = (hours, minutes, seconds) => {
    return(//Irá retornar "true" caso as condições abaixo forem satisfeitas
        hours >= 0 && hours < 24 &&
        minutes >= 0 && minutes < 60 &&
        seconds >= 0 && seconds < 60
    );
}

for(i = 0; i < 5; i++){
    let hours, minutes, seconds; 
    let validTime = false;
    
    while(!validTime){
        hours = parseInt(prompt(`Enter hours for time ${i + 1} (0-23): `));
        minutes = parseInt(prompt(`Enter minutes for time ${i + 1} (0-59): `));
        seconds = parseInt(prompt(`Enter seconds for time ${i + 1} (0-59): `));
        
        if(isValidTime(hours, minutes, seconds)){
            validTime = true;
        }else{
            console.log(`Invalid time! Please enter the values again.`);
        }
    }

    console.log(`Time ${i + 1}: ${String(hours).padStart(2, '0')}.${String(minutes).padStart(2, '0')}.${String(seconds).padStart(2, '0')}`);
}