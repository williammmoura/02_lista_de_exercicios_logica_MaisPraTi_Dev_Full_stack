/*13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.*/

let fibonacciTerms = Array(15); //Criar um vetor com 15 posições

fibonacciTerms[0] = 1 //Primeiro elemento da sequência de Fibonacci
fibonacciTerms[1] = 1 //Segundo elemento da sequência de Fibonacci

for(let i = 2; i < 15; i++){
    fibonacciTerms[i] = fibonacciTerms[i - 1] + fibonacciTerms[i - 2];
}

console.log(fibonacciTerms);