function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
    return (nCols - col + 1) * (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3));