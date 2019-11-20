function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    let lastPage: number = current - 1;
    let digitsUsed: number = 0;
    while(digitsUsed < numberOfDigits){
        if(lastPage + 1 < 10){
            lastPage++;
            digitsUsed++;
        } else if (lastPage + 1 < 100 && numberOfDigits - digitsUsed >= 2) {
            lastPage++;
            digitsUsed += 2;
        } else {
            console.log(numberOfDigits - digitsUsed);
            break;
        }
    }
    return lastPage;
}

//-   For current = 1 and numberOfDigits = 5, the output should be
console.log(pagesNumberingWithInk(1, 5)); // 5 - 1, 2, 3, 4, 5.

//-   For current = 21 and numberOfDigits = 5, the output should be
console.log(pagesNumberingWithInk(21, 5)); // 22 - 21, 22

// -   For current = 8 and numberOfDigits = 4, the output should be
console.log(pagesNumberingWithInk(8, 4)); // 10 - 8, 9, 10
