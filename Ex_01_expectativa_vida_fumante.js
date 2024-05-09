// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

const prompt = require("prompt-sync")();

const calculateLostLifeTime = (cigarettesPerDay, yearsSmoked) => {
    const totalCigarettes = cigarettesPerDay * yearsSmoked * 365; //Calculo do total de cigarros fumados.

    const timeLifeLostMinutes = totalCigarettes * 10; //Calculo do tempo de vida perdido em minutos.

    const timeLifeLostDays = timeLifeLostMinutes / (24 * 60); //Convesão de minutos para dias. Como há 24 horas em um dia e 60 minutos em uma hora, dividimos o tempo perdido em minutos pelo total de minutos em um dia para obter o tempo perdido em dias.

    return timeLifeLostDays;
}

const cigarettesPerDay = parseInt(prompt("How many cigarettes do you smoke a day?"))
const yearsSmoked = parseInt(prompt("How many years have you smoked?"));

const lostTime = calculateLostLifeTime(cigarettesPerDay, yearsSmoked); // A função "calculateLostLifeTime" é chamada com os valores fornecidos pelo usuário. O resultado é armazenado na variável "lostTime".

console.log(`You will lose approximately ${lostTime.toFixed(2)} days of life due to smoking.`);