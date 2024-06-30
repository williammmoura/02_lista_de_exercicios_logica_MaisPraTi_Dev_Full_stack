/*18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.*/

const prompt = require('prompt-sync')();

let continueAsking = true;

while(continueAsking){
    const employeeName = prompt("What is the employee's name? ");
    const employeePosition = prompt("What is the employee position? ");

    //Validação para entrada de numeros para o salário.
    let validEmployeeSalary = false;
    let employeeSalary;
    while(!validEmployeeSalary){
        employeeSalary = parseFloat(prompt("What is the salary? US$"));

        if(!isNaN(employeeSalary)){
            validEmployeeSalary = true;
        }else{
            console.log("Please enter a number value.");
        }
    }

    //Criação do registro
    const employee = {
        Name: employeeName,
        Position: employeePosition,
        Salary: employeeSalary,
    }

    console.log("Employee Record:");
    console.log(`Name: ${employee.Name};`);
    console.log(`Position: ${employee.Position};`);
    console.log(`Salary: US$${employee.Salary.toFixed(2)};`);

    const askAgain = prompt("Do you want to continue? (Y/N): ").toLocaleUpperCase();

    if(askAgain !== "Y"){
        continueAsking = false;
    }
}