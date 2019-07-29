function bishopAndPawn(bishop: string, pawn: string): boolean {
    
    return false;
}

console.log(bishopAndPawn('a1', 'c3'));
console.assert(bishopAndPawn('a1', 'c3'), "bishopAndPawn('a1', 'c3') should equal true");
console.assert(bishopAndPawn('f4', 'c7'), "bishopAndPawn('a1', 'c3') should equal true");
console.assert(bishopAndPawn('d4', 'f2'), "bishopAndPawn('a1', 'c3') should equal true");
console.assert(bishopAndPawn('h8', 'b2'), "bishopAndPawn('h8', 'b2') should equal true");
console.assert(!bishopAndPawn('a1', 'b1'), "bishopAndPawn('a1', 'c3') should equal false");
console.assert(!bishopAndPawn('a1', 'a4'), "bishopAndPawn('a1', 'c3') should equal false");
console.assert(!bishopAndPawn('e5', 'g2'), "bishopAndPawn('a1', 'c3') should equal false");
console.assert(!bishopAndPawn('h8', 'd7'), "bishopAndPawn('h8', 'd7') should equal false");
