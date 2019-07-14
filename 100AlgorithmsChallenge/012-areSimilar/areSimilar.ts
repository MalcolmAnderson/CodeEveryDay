function areSimilar(arrayOne: number[], arrayTwo: number[]): boolean {
    if (arrayOne.length != arrayTwo.length) {
        return false;
    }
    if (allAreEqual(arrayOne, arrayTwo)) {
        return true;
    }

    // Note to self: When adding a second for loop, 
    // make sure that the comparison is *inside* the second for loop

    for (let i: number = 0; i < arrayOne.length - 1; i++) {
        let candidateArrary: number[];
        for (let j: number = i + 1; j < arrayOne.length; j++) {
            candidateArrary = arrayItemSwap(arrayOne, i, j);
            console.log("i="+i+", j="+j+", ")
            console.log(candidateArrary);
        }
        // This should be *before* that end curly brace
        if (allAreEqual(arrayTwo, candidateArrary)) {
            return true;
        }
    }
    return false;
}

function allAreEqual(arrayOne: number[], arrayTwo: number[]): boolean {
    let allAreEqual: boolean = true;
    for (let i: number = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            allAreEqual = false;
        }
    }
    if (allAreEqual) {
        return true;
    }
}

function arrayItemSwap(sourceArray: number[], index1: number, index2: number): number[] {
    let returnArray: number[] = sourceArray.slice();
    returnArray[index1] = sourceArray[index2];
    returnArray[index2] = sourceArray[index1];
    return returnArray;
}

// console.assert(areSimilar([1, 2, 3], [1, 2, 3]), "[1, 2, 3], [1, 2, 3] - Should be true");
// console.assert(areSimilar([1, 2, 3], [2, 1, 3]), "[1, 2, 3], [2, 1, 3] - Should be true");
console.assert(areSimilar([1, 2, 3, 4], [4, 2, 3, 1]), "[1, 2, 3, 4], [4, 2, 3, 1] - Should be true");
// console.assert(!areSimilar([1, 2, 2], [2, 1, 1]), "[1, 2, 2], [2, 1, 1] - Should be false");
// console.assert(!areSimilar([1, 2, 3, 4], [4, 2, 3, 1]), "[1, 2, 3, 4], [4, 2, 3, 4] - Should be true");
