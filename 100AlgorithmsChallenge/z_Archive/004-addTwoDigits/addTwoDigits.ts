function addTwoDigits(myInput: number): number {
    let tens = Math.floor(myInput / 10);
    let ones = myInput % 10;
    return tens + ones;
}

function addTwoDigits2(myInput: number): number {
    const digits = myInput.toString().split('');
    return parseInt(digits[0]) + parseInt(digits[1]);
}

function addTwoDigits3(myInput: any): number {
    const digits = myInput.toString().split('');
    return digits.reduce((a: string, b: string) => {
        return parseInt(a) + parseInt(b);
    });
}

function addTwoDigits4(myInput: number): number {
    const strings = myInput.toString().split('');
    const digits = strings.map(x => parseFloat(x));
    function getSum(total, num) {
        return parseInt(total) + parseInt(num);
    }
    return digits.reduce(getSum);
}

function addTwoDigits5(myInput: number): number {
    const strings = myInput.toString().split('');
    return strings.map((x) => Number(x)).reduce((a, b) => a + b);
}



// My way
console.log(addTwoDigits(23));
console.log(addTwoDigits(99))
console.log(addTwoDigits(10));

// Dylan's second way
console.log(addTwoDigits2(23));
console.log(addTwoDigits2(99))
console.log(addTwoDigits2(10));

//Dylan's first way
console.log(addTwoDigits3(23));
console.log(addTwoDigits3(99))
console.log(addTwoDigits3(10));

//My second way
console.log(addTwoDigits4(23));
console.log(addTwoDigits4(99))
console.log(addTwoDigits4(10));

//Someone else's (Jakes) way   ----- Why does this work?
console.log(addTwoDigits5(23));
console.log(addTwoDigits5(99))
console.log(addTwoDigits5(10));
