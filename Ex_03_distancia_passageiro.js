//3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

const distancePrice = (travelledDistance) => {

    const distancePriceUpTo200Km = 0.50;
    const priceForDistancesGreaterThan200Km = 0.45;

    let price;
    
    if(travelledDistance <= 200){
        price = travelledDistance * distancePriceUpTo200Km;
    }else{
        price = travelledDistance * priceForDistancesGreaterThan200Km;
    }

    return price;
}

let travelledDistance = parseInt(prompt("What is the distance (kilometers) travelled?"));

console.log(`The distance traveled was ${travelledDistance}km and the price to be paid will be R$${distancePrice(travelledDistance)}.`);