/*22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/

const prompt = require('prompt-sync')();

const search = () => {

    //Contadores.
    //Para armazenar a soma total dos salários e do número de filhos.
    let totalSalaries = 0; 
    let totalChildren = 0;
    //Para rastrear o maior salário registrado.
    let highestSalary = 0;
    //Para contar quantas pessoas têm salário até US$ 350.00.
    let salaryUpto350 = 0;
    //Para contar o número total de pessoas.
    let totalPeople = 0;

    //Validação das entradas
    while(true){//O loop só é interrompido quando o usuário escolhe parar a inserção de dados, digitando 'n' em resposta à pergunta "Do you want to provide information about one more person? (y/n): ".

        //Leitura e validação do salário
        let inputSalary;
        while(true){//O loop continua solicitando a entrada do usuário até que um valor válido seja fornecido
            inputSalary = parseFloat(prompt("Enter your salary amount: US$"));
            if(isNaN(inputSalary)){
                console.log("Please enter only numeric values.");
            }else{
                break; //Quando uma entrada válida é fornecida, o loop é interrompido com "break".
            }
        }

        //Leitura e validação do número de filhos
        let inputNumberOfChildren;
        while(true){//O loop continua solicitando a entrada do usuário até que um valor válido seja fornecido
            inputNumberOfChildren = parseInt(prompt("Enter the number of children: "));
            if(isNaN(inputNumberOfChildren)){
                console.log("Please enter only numeric values.");
            }else{
                break; //Quando uma entrada válida é fornecida, o loop é interrompido com "break".
            }
        }

        //Processamento de dados
        totalSalaries += inputSalary;
        totalChildren += inputNumberOfChildren;
        if(inputSalary > highestSalary){// "highestSalary" é atualizado se o salário atual for maior do que o maior salário registrado até o momento.
            highestSalary = inputSalary;
        }
        if(inputSalary <= 350){// "salaryUpto350" é incrementado se o salário atual for menor ou igual a R$ 350,00.
            salaryUpto350++;
        }
        totalPeople++;// "totalPeople" é incrementado para contabilizar a pessoa atual.

        //Pergunta ao usuário se deseja continuar
        let proceed;
        while(true){
            proceed = prompt("Do you want to provide information about one more person? (y/n): ").toLowerCase();
            if(proceed === 'y' || proceed === 'n'){
                break;
            }else{
                console.log('Please type only "y" for yes, or "n" for no.');
            }
        }

        if(proceed === 'n'){
            break;
        }
    }

    //Cálculo das médias e percentual
    let averageSalary = totalSalaries / totalPeople;
    let averageChildren = totalChildren / totalPeople;
    let percentageSalaryUpto350 = (salaryUpto350 / totalPeople) * 100;

    return{
        averageSalary,
        averageChildren,
        highestSalary,
        percentageSalaryUpto350
    };
};

//Executando a funçãoe e mostrando os resultados
const result = search();
console.log(`Average salary of the population: US$${result.averageSalary.toFixed(2)}`);
console.log(`Average number of children: ${result.averageChildren.toFixed(2)}`);
console.log(`Highest salary: US$${result.highestSalary.toFixed(2)}`);
console.log(`Percentage of people earning up to US$350.00: ${result.percentageSalaryUpto350.toFixed(2)}%`);