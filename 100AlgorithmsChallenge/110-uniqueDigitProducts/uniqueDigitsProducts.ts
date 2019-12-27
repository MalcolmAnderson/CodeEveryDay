function uniqueDigitProducts(a: number[]): number {
    const outArray: number[] = [];
    for (let i: number = 0; i < a.length; i++) {
        outArray.push(returnProductNumber(a[i]));
    }
    const uniquePNs: number[] = [];
    for (let i: number = 0; i < outArray.length; i++) {
        console.log(outArray[i]);
        if (uniquePNs.indexOf(outArray[i]) === -1) {
            uniquePNs.push(outArray[i]);
        }
    }
    // function to return product number
    // capture those numbers
    // count the unique numbers
    return uniquePNs.length;
}

function returnProductNumber(a: number): number {
    const strArray: string[] = a.toString().split('');
    let total = 1;
    for (let i: number = 0; i < strArray.length; i++) {
        total *= parseInt(strArray[i]);
    }
    return total;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));