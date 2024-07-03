/*20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).*/

const prompt = require('prompt-sync')();

let employees = [];

for(let i = 0; i < 10; i++){
    console.log(`\n Dados do colaborador ${i + 1}:`);

    //Validação de entrada de números
    let registrationEmployee;
    let validRegistrationEmployee = false;
    while(!validRegistrationEmployee){
        registrationEmployee = parseInt(prompt("Enter the employee's registration number: "));

        if(isNaN(registrationEmployee)){
            console.log("Please enter a numeric value.");
        }else{
            validRegistrationEmployee = true;
        }
    }
    const nameEmployee = (prompt("Enter the employee`s name: "));

    //Validação de entrada de números
    let employeeGrossSalary;
    let validEmployeeGrossSalary = false;
    while(!validEmployeeGrossSalary){
        employeeGrossSalary = parseFloat(prompt("Enter the employee's gross salary: "));

        if(isNaN(employeeGrossSalary)){
            console.log("Please enter a numeric value.");
        }else{
            validEmployeeGrossSalary = true;
        }
    }

    const inssDeduction = employeeGrossSalary * 0.12;
    const employeeNetSalary = employeeGrossSalary - inssDeduction;

    //Criando o objeto contracheque.
    let paycheck = {
        registration: registrationEmployee,
        name: nameEmployee,
        grossSalary: employeeGrossSalary.toFixed(2),
        inssDeduction: inssDeduction.toFixed(2),
        netSalary: employeeNetSalary.toFixed(2)
    };
    employees.push(paycheck);//Coloca no array "employees" o objeto "paycheck"
}

//Exibindo os contracheques
employees.forEach((employee, index) => { // forEach: Este método é chamado no array employees. Ele executa a função fornecida para cada elemento no array.

    /* - "employee": Este é o objeto atual (o funcionário atual) do array employees que está sendo processado.
       - "index": Este é o índice do objeto atual no array employees. Ele começa em 0 para o primeiro elemento e incrementa em 1 para cada elemento subsequente.*/

    console.log(`\nContracheque do colaborador ${index + 1}:`);
    console.log(`Matrícula: ${employee.registration}`);
    console.log(`Nome: ${employee.name}`);
    console.log(`Salário bruto: ${employee.grossSalary}`);
    console.log(`Dedução INSS: ${employee.inssDeduction}`);
    console.log(`Salário líquido: ${employee.netSalary}`);
});
