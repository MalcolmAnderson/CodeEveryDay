function arrayConversion2(myArray: number[]): number {
    myArray = processEachPairOfElements2(myArray, true);
    return myArray[0];
}


function processEachPairOfElements2(myArray: number[], isOdd: boolean): number[] {
    if(myArray.length === 1){
        return myArray;
    }
    let returnArray: number[] = [];
    for (let i: number = 0; i < myArray.length; i += 2) {
        if (i + 1 > myArray.length - 1) {
            returnArray.push(myArray[i]);
        } else {
            if (isOdd) {
                returnArray.push(myArray[i] + myArray[i + 1]);
            } else {
                returnArray.push(myArray[i] * myArray[i + 1]);
            }
        }
    }
    returnArray = processEachPairOfElements2(returnArray, !isOdd);
    return returnArray;
}
console.log(arrayConversion2([8, 2, 3]));
console.assert(arrayConversion2([8, 2, 3]) === 30, "arrayConversion([8, 2, 3]) should return 30");

console.log(arrayConversion2([8, 2]));
console.assert(arrayConversion2([8, 2]) === 10, "arrayConversion([8, 2]) should return 10");

console.log(arrayConversion2([8]));
console.assert(arrayConversion2([8]) === 8, "arrayConversion([8]) should return 8");



// console.log(arrayConversion2([1, 2, 3, 4, 5, 6, 7, 8]));
// console.assert(arrayConversion2([1, 2, 3, 4, 5, 6, 7, 8]) === 186, "arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) should return 186");

// console.log(arrayConversion2([1, 2, 3, 4, 5, 6, 7, 8, 2]));
// console.assert(arrayConversion2([1, 2, 3, 4, 5, 6, 7, 8, 2]) === 372, "arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 2]) should return 372");

// console.log(arrayConversion2([7, 8, 2]));
// console.assert(arrayConversion2([7, 8, 2]) === 30, "arrayConversion([7, 8, 2]) should return 30");
