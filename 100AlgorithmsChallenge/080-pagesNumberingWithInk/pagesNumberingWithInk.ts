function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    let lastPage: number = current - 1;
    let digitsLeft: number = numberOfDigits;
    while(digitsLeft > 0){
        const numLengthOfNextPage = (lastPage + 1).toString().length;
        if(digitsLeft >= numLengthOfNextPage){
            lastPage++;
        }
        digitsLeft -= numLengthOfNextPage;
    }
    return lastPage;
}

//-   For current = 1 and numberOfDigits = 5, the output should be
console.log(pagesNumberingWithInk(1, 5)); // 5 - 1, 2, 3, 4, 5.

//-   For current = 21 and numberOfDigits = 5, the output should be
console.log(pagesNumberingWithInk(21, 5)); // 22 - 21, 22

// -   For current = 8 and numberOfDigits = 4, the output should be
console.log(pagesNumberingWithInk(8, 4)); // 10 - 8, 9, 10
