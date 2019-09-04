function digitDegree(n: number): number {
    let holding: string[] = n.toString().split('');
    let newNumber: number = 0;
    let count = 0;
    while (holding.length > 1) {
        for(let i: number = 0; i < holding.length; i++){
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
let newNumber:number = 0;
console.log(holding.forEach(a => { newNumber + parseInt(a) }));


console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));