 function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let holdingBin: number[] = [];
    for(let i: number = 0; i < inputArray.length - 1; i++){
        holdingBin.push(Math.abs(inputArray[i] - inputArray[i+1]));
    }
    return Math.max.apply(Math, holdingBin);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 7]));
console.log(Math.abs(-5));