
function chessBoardCellColor(cell1: string, cell2: string): boolean {
    let board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    }
    let cellColor1: number = (board[cell1[0]] + parseInt(cell1[1])) % 2;
    let cellColor2: number = (board[cell2[0]] + parseInt(cell2[1])) % 2;

    return cellColor1 === cellColor2;
}



console.assert(chessBoardCellColor('A1', 'C3'), "chessBoardCellColor('A1', 'C3') should be true", chessBoardCellColor('A1', 'C3'));
console.assert(!chessBoardCellColor('A1', 'H3'), "chessBoardCellColor('A1', 'H3') should be false", chessBoardCellColor('A1', 'H3'));

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
