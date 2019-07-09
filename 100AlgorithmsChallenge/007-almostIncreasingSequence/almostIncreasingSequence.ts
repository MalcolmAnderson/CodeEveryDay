function isIncreasingSequence(inputArray: number[]): boolean {
    let alwaysIncreasing: boolean = true;
    let base: number = inputArray[0];
    let candidate: number;
    for (let i: number = 1; i < inputArray.length; i++) {
        candidate = inputArray[i];
        if (candidate > base) {
            base = candidate;
        } else {
            return false;
        }
    }
    return true;
}

function almostIncreasingSequence(inputArray: number[]): boolean {
    if(isIncreasingSequence(inputArray)){
        return true;
    }
    let candidate: number[];
    for (let i: number = 1; i < inputArray.length; i++) {
        candidate = inputArray;
        candidate.splice(i,1);
        console.log(candidate)
        if(isIncreasingSequence(candidate)) {
            return true;
        }
    }
    return false;
}

let testVal = [1, 2, 2, 3, 5, 7]
let candidate = testVal.splice(0,1);
console.log(testVal.splice(4, 1))
console.log(testVal)
console.log(candidate)



// should return true
console.log(almostIncreasingSequence([1, 2, 2, 3, 5, 7]))

// should return true
console.log(almostIncreasingSequence([1, 3, 2]))

// should return false
console.log(almostIncreasingSequence([1, 2, 2, 1]))

// should return true
console.log(almostIncreasingSequence([1, 2, 23, 3, 5, 7]))




// should return false
console.log(isIncreasingSequence([1, 2, 2, 3, 5, 7]))

// should return false
console.log(isIncreasingSequence([1, 3, 2]))

// should return false
console.log(isIncreasingSequence([1, 2, 2, 1]))

// should return false
console.log(isIncreasingSequence([1, 2, 23, 3, 5, 7]))

// should return true
console.log(isIncreasingSequence([1, 2, 3, 5, 7]))
