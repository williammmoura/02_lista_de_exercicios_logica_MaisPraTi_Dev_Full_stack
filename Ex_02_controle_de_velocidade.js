//2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')();

const speedLimit = 80;
const fineValuePerKm = 5;

let speedCar = parseInt(prompt("What is the speed of the car?"));

if(speedCar > speedLimit){
    console.log(`You have exceeded the speed limit of ${speedLimit} Km/h. Recorded speed: ${speedCar} Km/h.`);

    let kmUpLimit = speedCar - speedLimit;
    let fineValue = kmUpLimit * fineValuePerKm;

    console.log(`You were fined R$ ${fineValue.toFixed(2)}.`);
}else{
    console.log(`You are within the speed limit. Drive safely!`);
}