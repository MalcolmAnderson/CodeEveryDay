// Dylan's
function isLucky(n: number): boolean {
    const luckyN: string = n.toString();
    const half: number = luckyN.length / 2
    const firstHalf: number = getTotal(luckyN.substring(0, half));
    const secondHalf: number = getTotal(luckyN.substring(half, luckyN.length));
    return firstHalf === secondHalf;
}

function getTotal(n: string): number {
    return n.split('').map((char) => parseInt(char)).reduce((num1, num2) => num1 + num2);
}



function isLucky_mine(n: number): boolean {
    const nAsString: string = n.toString();
    const halfLength: number = nAsString.length / 2
    console.log(nAsString)
    console.log(halfLength);
    const firstHalf = nAsString.substring(0, halfLength);
    const secondHalf = nAsString.substring(halfLength);
    console.log(firstHalf);
    console.log(secondHalf);
    return sumOfEachNumber(firstHalf) === sumOfEachNumber(secondHalf);
}

function sumOfEachNumber(numberAsString: string): number{
    const myStrings: string[] = numberAsString.split('');
    console.log(myStrings)
    let total: number = 0;
    for(let i:number = 0; i < myStrings.length; i++){
        total += parseInt(myStrings[i]);
    }
    console.log(total);
    return total;
}

console.log(isLucky(1230));
console.log(isLucky(239017));