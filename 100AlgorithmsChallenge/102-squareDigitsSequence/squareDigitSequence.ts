function getDigitCount(a0: number): number {
    let count = 1;
    while (a0 - Math.pow(10, count) >= 0) {
        count++;
    }
    return count;
}

function squareOfDigits(a0: number): number {
    let digits: number = getDigitCount(a0);
    let total: number = 0;
    while (digits > 0) {
        let currentDigit: number = Math.floor(a0 / Math.pow(10, digits - 1));
        total += Math.pow(currentDigit, 2);
        a0 -= currentDigit * Math.pow(10, digits - 1);
        digits--;
    }
    return total;
}

function squareDigitsSequence(a0: number): number {
    const sumBag: object = {};
    let count: number = 1;
    while (!sumBag.hasOwnProperty(a0)) {
        count++;
        sumBag[a0] = 1;
        a0 = squareOfDigits(a0);
    }
    return count++;
}

console.log(squareDigitsSequence(16));  // 9
console.log(squareDigitsSequence(1));  // 9
console.log(squareDigitsSequence(103));

console.log(Math.floor(851 / 100))
console.log(Math.floor(851 / Math.pow(10, 2)))

console.log(squareOfDigits(1));  // 1
console.log(squareOfDigits(3));  // 9
console.log(squareOfDigits(9));  // 81
console.log(squareOfDigits(81)); // 65
console.log(squareOfDigits(65)); // 61 = 36 + 25


console.log(getDigitCount(811)); // 1
console.log(getDigitCount(1)); // 1
console.log(getDigitCount(10)); // 2
console.log(getDigitCount(100)); // 3
console.log(getDigitCount(1000)); // 4
console.log(getDigitCount(10000)); // 5

