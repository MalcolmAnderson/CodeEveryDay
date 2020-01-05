function uniqueDigitProducts(a: number[]): number {
    const outArray: number[] = [];
    for (let i: number = 0; i < a.length; i++) {
        const currentProductNumber = returnProductNumber(a[i]);
        if (outArray.indexOf(currentProductNumber) === -1) {
            outArray.push(currentProductNumber);
        }
    }
    return outArray.length;
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