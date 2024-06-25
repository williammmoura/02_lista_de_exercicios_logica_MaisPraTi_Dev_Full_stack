/*12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/

let fibonacciTerms = [1, 1]; //Dois primeiros termos da sequencia de Fibonacci

for(let i = 2; i <= 10; i++){
    fibonacciTerms.push(fibonacciTerms[i - 1] + fibonacciTerms[i - 2]);
}

console.log(fibonacciTerms);