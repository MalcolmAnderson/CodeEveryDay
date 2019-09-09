function sumOfArray(sum, num) {
    return sum + num;
}

function crossingSum_mine(matrix: number[][], a: number, b: number): number {
    let sum: number = matrix[a].reduce(sumOfArray);
    for (let i: number = 0; i < matrix.length; i++) {
        sum += matrix[i][b];
    }
    sum -= matrix[a][b];

    return sum;
}

// Dylan's version
function crossingSum(matrix: number[][], a: number, b: number): number {
    let sum: number = matrix[a].reduce((a, b) => a + b);
    for (let i: number = 0; i < matrix.length; i++) {
        sum += i !== a ? matrix[i][b] : 0;
    }
    return sum;
}

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));