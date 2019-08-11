let rowLetterMap = new Map();
rowLetterMap.set('A', 1);
rowLetterMap.set('B', 2);
rowLetterMap.set('C', 3);
rowLetterMap.set('D', 4);
rowLetterMap.set('E', 5);
rowLetterMap.set('F', 6);
rowLetterMap.set('G', 7);
rowLetterMap.set('H', 8);


function isBlack(cell: string): boolean {
    let firstCell: string[] = cell.split('');
    let firstCellNumber: number[] = [];
    firstCellNumber.push(rowLetterMap.get(firstCell[0]));
    firstCellNumber.push(parseInt(firstCell[1]));
    return firstCellNumber[0] % 2 === firstCellNumber[1] % 2;
}


function chessBoardCellColor(cell1: string, cell2: string): boolean {
    return isBlack(cell1) === isBlack(cell2);
}

console.log(isBlack("H3"));
console.log(isBlack("A1"));

console.assert(chessBoardCellColor('A1', 'C3'), "chessBoardCellColor('A1', 'C3') should be true", chessBoardCellColor('A1', 'C3'));
console.assert(!chessBoardCellColor('A1', 'H3'), "chessBoardCellColor('A1', 'H3') should be false", chessBoardCellColor('A1', 'H3'));

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
