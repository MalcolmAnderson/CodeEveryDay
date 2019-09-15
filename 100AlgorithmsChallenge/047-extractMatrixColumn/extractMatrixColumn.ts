function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const returnArray: number[] = [];
    for(let i: number = 0; i < matrix.length; i++){
        returnArray.push(matrix[i][column]);
    }
    return returnArray;
}


// should be [1, 0, 3]
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));