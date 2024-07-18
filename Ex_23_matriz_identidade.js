/*23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.*/

//Criar uma função que determine o tamanho da matriz quadrada (Ex. 7x7)
const creatIdentityMatrix = (size) => {
    //Iniciar uma matriz 2D com zeros
    let matrix = [];

    //Cria cada linha da matriz
    for(let i = 0; i < size; i++){
        //Linha com zeros
        let row = [];
        for(let j = 0; j < size; j++){
            row.push(0);
        }

        //Definindo 1 como elemento da diagonal principal
        row[i] = 1;
        //Adicionar a linha à matriz
        matrix.push(row);
    }

    return matrix;
}

//Função para imprimir a matriz
const printMatrix = (matrix) => {
    //Linha da matriz
    for(let i = 0; i < matrix.length; i++){
        //Converte a linha em uma string separada por espaços e imprime
        console.log(matrix[i].join(' '));
    }
}

//Criar a matriz identidade
let identityMatrix = creatIdentityMatrix(3)
printMatrix(identityMatrix);