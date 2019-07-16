// the trick was to initialize j to i+1, not 1 (i+1 on the first iteration)

function containsCloseNums(inputArray: number[], rangeOrLess: number): boolean {
    for(let i: number = 0; i < inputArray.length - 1; i++){
        for(let j: number = i+1; j < inputArray.length; j++){
            if(j-i <= rangeOrLess){
                if(inputArray[i] === inputArray[j]){
                    return true;
                }
            }
            else{
                j = inputArray.length;  // end current j loop
            }
        }
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
console.assert(containsCloseNums([0, 1, 2, 3, 5, 2], 3), "([0, 1, 2, 3, 5, 2], 3)) should return true");
console.assert(!containsCloseNums([0, 1, 2, 3, 5, 2], 2), "([0, 1, 2, 3, 5, 2], 2)) should return false");

