// Dylan's
function digitDegree(n: number): number {
    let count = 0;
    let currentNumber = n;
    if (n < 9) {
        return count;
    } else {
        while (true){
            count++;
            currentNumber = getDigit(currentNumber);
            if (currentNumber <= 9) {
                break;
            }
        }
    }
    return count;
}
// Dylan's function
function getDigit(num: number): number {
    const nums: number[] = num.toString().split('').map((element) => parseInt(element));
    return nums.reduce((a, b) => {
        return a + b;
    })
}



function digitDegree_mine(n: number): number {
    let holding: string[] = n.toString().split('');
    let newNumber: number = 0;
    let count = 0;
    while (holding.length > 1) {
        for (let i: number = 0; i < holding.length; i++) {
            newNumber += parseInt(holding[i]);
        }
        holding = newNumber.toString().split('');
        newNumber = 0;
        count++;
    }
    return count;
}

let n: number = 520;
let holding: string[] = n.toString().split('');
console.log(holding);
let newNumber: number = 0;
console.log(holding.forEach(a => { newNumber + parseInt(a) }));


console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));