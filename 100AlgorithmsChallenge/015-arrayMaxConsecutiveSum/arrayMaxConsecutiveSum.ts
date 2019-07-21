function arrayMaxConsecutiveSum(inputArray: number[], elementsToCheck): number {
    let holdingBinArray: number[] = [];
    for(let i: number = 0; i < inputArray.length - (elementsToCheck-1); i++){
        let holdingBin: number = 0;
        for(let j: number = 0; j < elementsToCheck; j++){
            holdingBin += inputArray[i+j];
        }
        holdingBinArray.push(holdingBin);
    }

    return Math.max.apply(Math, holdingBinArray);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.assert(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2) === 8, "arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2) should equal 8")

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
console.assert(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3) === 12, "arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2) should equal 12")
