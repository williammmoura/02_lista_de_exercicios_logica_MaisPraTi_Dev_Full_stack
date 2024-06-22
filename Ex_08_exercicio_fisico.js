/*8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/

const prompt = require('prompt-sync')();

const hoursOfPhysicalActivityPerMonth = parseInt(prompt('How many hours of physical activity do you do per month?'));

let points = 0;

if(hoursOfPhysicalActivityPerMonth > 0 && hoursOfPhysicalActivityPerMonth <= 10){
    points = hoursOfPhysicalActivityPerMonth * 2;
}else if(hoursOfPhysicalActivityPerMonth > 10 && hoursOfPhysicalActivityPerMonth <= 20){
    points = 10 * 2 + (hoursOfPhysicalActivityPerMonth - 10) * 5;
}else{
    points = 10 * 2 + 10 * 5 + (hoursOfPhysicalActivityPerMonth - 20) * 10; 
}

let earnedMoney = points * 0.05;

console.log(`You practiced physical activities for ${hoursOfPhysicalActivityPerMonth} hours during the month. Your score will be: ${points}. The points earned are: R$${earnedMoney.toFixed(2)}`);