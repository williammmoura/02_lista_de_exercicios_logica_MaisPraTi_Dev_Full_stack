/*9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.*/ 

const prompt = require("prompt-sync")();

let totalMaleSalary = 0;
let totalFemaleSalary = 0;
let keepAsking = true;

while(keepAsking){
    const salary = parseFloat(prompt("Enter the amount of your monthly salary: US$"));

    //Validação da entrada do valor fornecido pelo usuário
    if(isNaN(salary)){
        console.log("Please enter a numeric value.");
        continue;
    }

/*=======================================================================================*/

    /*Por Que a Validação Abaixo Funciona?
    - Controle do Loop: validChoice começa como false, então o loop continua até que uma entrada válida seja recebida.
    - Verificação de Número: !isNaN(userChoice) garante que a entrada seja um número.
    Intervalo de Valores: userChoice >= 0 && userChoice <= 1 garante que o número esteja dentro do intervalo permitido (0 ou 1).
    - Mensagens de Erro: Se a entrada for inválida, o usuário recebe um aviso e é solicitado a tentar novamente, garantindo que o programa não prossiga com dados inválidos.*/
    let validChoice = false; //Define uma variável de controle para o loop.
    let userChoice; //Variável que armazenará a escolha do usuário.
    while(!validChoice){ //É um loop que continuará rodando até que "validChoice" seja "true".
        console.log("Check out the option below:");
        console.log("[ 0 ] -> Male; \n[ 1 ] -> Female");
        userChoice = parseInt(prompt("Enter the corresponding option number:"));

        //validação da escolha entre as opções oferecidas
        if(!isNaN(userChoice) && userChoice >= 0 && userChoice <= 1){ //a entrada não é "NaN" (ou seja, é um número).
            validChoice = true; //Sai do loop.
        }else{
            console.log("Invalid choice! Please, enter a number between 0 and 1.");
        }
    }

/*====================================================================================*/    

    //Atualizar o total de salários de acordo com o gênero.
    if(userChoice === 0){
        totalMaleSalary += salary;
    }else if(userChoice === 1){
        totalFemaleSalary += salary
    }

    const askAgain = prompt("Do you want to continue responding? (Y/N): ").toLocaleUpperCase();

    if(askAgain !== "Y"){
        keepAsking = false;
    }
}

console.log(`Total salary paid to men: US$${totalMaleSalary.toFixed(2)}`);
console.log(`Total salary paid to women: US$${totalFemaleSalary.toFixed(2)}`);
console.log("Thanks!");