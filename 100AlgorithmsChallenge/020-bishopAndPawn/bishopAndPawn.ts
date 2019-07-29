function bishopAndPawn(bishop: string, pawn: string): boolean {
    // Caleb E's version
    // https://www.udemy.com/100-algorithms-challenge/learn/lecture/10516802#questions/7598148
    return (
        Math.abs(bishop[0].charCodeAt(0)-pawn[0].charCodeAt(0)) === Math.abs(parseInt(bishop[1]) - parseInt(pawn[1]))
    );
}


function bishopAndPawn_Dylans_Version(bishop: string, pawn: string): boolean {
    const board = {
        "a" : 1,
        "b" : 2,
        "c" : 3,
        "d" : 4,
        "e" : 5,
        "f" : 6,
        "g" : 7,
        "h" : 8
    }
    const bishopX: number = board[bishop[0]];
    const bishopY: number = parseInt(bishop[1]);
    const pawnX: number = board[pawn[0]];
    const pawnY: number = parseInt(pawn[1]);
    
    let xDiff = Math.abs(bishopX - pawnX);
    let yDiff = Math.abs(bishopY - pawnY);

    return xDiff === yDiff;
}

function bishopAndPawnMyVersion(bishop: string, pawn: string): boolean {
    let bishopStringArray: string[] = bishop.split('');
    let bishopNumberArray: number[] = [];
    bishopNumberArray[0] = bishopStringArray[0].charCodeAt(0) - 96;
    bishopNumberArray[1] = parseInt(bishopStringArray[1]);

    let pawnStringArray: string[] = pawn.split('');
    let pawnNumberArray: number[] = [];
    pawnNumberArray[0] = pawnStringArray[0].charCodeAt(0) - 96;
    pawnNumberArray[1] = parseInt(pawnStringArray[1]);

    let xDiff = Math.abs(bishopNumberArray[0] - pawnNumberArray[0]);
    let yDiff = Math.abs(bishopNumberArray[1] - pawnNumberArray[1]);

    return xDiff === yDiff;
}


console.log("a2".split(""));
console.log("a".charCodeAt(0) - 96)
console.log("1".charCodeAt(0) - 96)

console.log(bishopAndPawn('a1', 'c3'));
console.assert(bishopAndPawn('a1', 'c3'), "bishopAndPawn('a1', 'c3') should equal true");
console.assert(bishopAndPawn('f4', 'c7'), "bishopAndPawn('a1', 'c3') should equal true");
console.assert(bishopAndPawn('d4', 'f2'), "bishopAndPawn('a1', 'c3') should equal true");
console.assert(bishopAndPawn('h8', 'b2'), "bishopAndPawn('h8', 'b2') should equal true");
console.assert(!bishopAndPawn('a1', 'b1'), "bishopAndPawn('a1', 'c3') should equal false");
console.assert(!bishopAndPawn('a1', 'a4'), "bishopAndPawn('a1', 'c3') should equal false");
console.assert(!bishopAndPawn('e5', 'g2'), "bishopAndPawn('a1', 'c3') should equal false");
console.assert(!bishopAndPawn('h8', 'd7'), "bishopAndPawn('h8', 'd7') should equal false");
