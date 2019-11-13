function minesweeper(matrix: boolean[][]): number[][] {
    // assumes perfect rectangle
    let height: number = matrix.length;
    let width: number = matrix[0].length;
    let returnArray: number[][] = [];
    for (let i: number = 0; i < height; i++) {
        let row: number[] = [];
        for (let j: number = 0; j < width; j++) {
            row.push(getMineCellCount(matrix, i, j));
        }
        console.log(row);
        returnArray.push(row);
    }
    return returnArray;
}

function getMineCellCount(matrix: boolean[][], x: number, y: number): number {
    let total = 0;
    for (let i: number = x - 1; i <= x + 1; i++) {
        if (i >= 0 && i < matrix.length) {
            for (let j: number = y - 1; j <= y + 1; j++) {
                if (j >= 0 && j < matrix[x].length) {
                    if (matrix[i][j] && !(i === x && j === y)) {
                    // if (matrix[i][j]) {
                            total++;
                    }
                }
            }
        }
    }
    return total;
}

console.log(minesweeper([
[true, false, false],
[false, true, false],
[false, false, false]]));


// matrix = [[true, false, false],
// [false, true, false],
// [false, false, false]]
// the output should be

// minesweeper(matrix) = 
//          [[1, 2, 1],
//           [2, 1, 1],
//           [1, 1, 1]]       
