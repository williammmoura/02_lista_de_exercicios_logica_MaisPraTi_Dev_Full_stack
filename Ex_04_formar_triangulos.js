//4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const prompt = require("prompt-sync")();

const formarTriangulos = (lineSegment1, lineSegment2, lineSegment3) => {
    if(lineSegment1 + lineSegment2 > lineSegment3 && 
       lineSegment1 + lineSegment3 > lineSegment2 &&
       lineSegment2 + lineSegment3 > lineSegment1){
        return(`The line segments ${lineSegment1}, ${lineSegment2}, ${lineSegment3} form a triangle.`);
    }else{
        return(`The line segments ${lineSegment1}, ${lineSegment2}, ${lineSegment3} do not form a triangle.`);
    } 
}

let lineSegment1 = parseInt(prompt("Enter the value of the first line segment:"));
let lineSegment2 = parseInt(prompt("Enter the value of the second line segment:"));
let lineSegment3 = parseInt(prompt("Enter the value of the third line segment:"));

console.log(formarTriangulos(lineSegment1, lineSegment2, lineSegment3));