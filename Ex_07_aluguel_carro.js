//7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir: 
//  Carros populares:
//- Até 100 Km percorridos: R$ 0,20 por Km;
//- Acima de 100 Km percorridos: R$ 0,10 por Km; 
//  Carros de luxo:
//- Até 200 Km percorridos: R$ 0,30 por Km;
//- Acima de 200 Km percorridos: R$ 0,25 por Km; 

const prompt = require("prompt-sync")();

const optionsCars = ["Top Line Car", "Popular Car"]
console.log("Check out the options below:");
console.log("[ 0 ] -> Top Line Car; \n[ 1 ] -> Popular Car.");
const userChoice = parseInt(prompt("Enter the corresponding option number:"));
const rentalDays = parseInt(prompt("Enter the number of days the car was rented:"));
const kilometersTraveled = parseInt(prompt("Enter the number of kilometers traveled:")); 

//Validação da escolha do usuário:
if(isNaN(userChoice) || userChoice < 0 || userChoice > 1){
    console.log("Invalid choice. Please enter a number between 0 and 1.");
} 

if(userChoice === 0){
    
    let totalDaysRented = rentalDays * 150;
    let totalRent;

    if(kilometersTraveled <= 200){
        totalRent = totalDaysRented + kilometersTraveled * 0.3;
        console.log(`You covered ${kilometersTraveled}Km. The final rental price is: R$${totalRent}.`);
    }else{
        totalRent = totalDaysRented + kilometersTraveled * 0.25;
        console.log(`You covered ${kilometersTraveled}Km. The final rental price is: R$${totalRent}.`);
    }
}

if(userChoice === 1){
    
    let totalDaysRented = rentalDays * 90;
    let totalRent;

    if(kilometersTraveled <= 100){
        totalRent = totalDaysRented + kilometersTraveled * 0.2;
        console.log(`You covered ${kilometersTraveled}Km. The final rental price is: R$${totalRent}.`);
    }else{
        totalRent = totalDaysRented + kilometersTraveled * 0.1;
        console.log(`You covered ${kilometersTraveled}Km. The final rental price is: R$${totalRent}.`);
    }
}