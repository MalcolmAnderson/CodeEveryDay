function minesweeper(matrix: boolean[][]): number[][] {
    // assumes perfect rectangle
    let height: number = matrix.length;
    let width: number = matrix[0].length;
    let returnArray: number[][] = [];
    for(let i: number = 0; i < height; i++){
        let row: number[] = [];
        for(let j: number = 0; j < width; j++){
            row.push(1);
        }
        console.log(row);
        returnArray.push(row);
    }
    return returnArray;
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));


// matrix = [[true, false, false],
// [false, true, false],
// [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//           [2, 1, 1],
//           [1, 1, 1]]       
