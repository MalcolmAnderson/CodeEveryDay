function arrayChange(myArray: number[]): number {
    return -1;
}

function maxNumber(myArray: number[]): number {
    return Math.max.apply(Math, myArray);
}

function firstIndexContainingValue(myArray: number[], numberToFind: number): number {
    let returnValue: number = -1;
    for (let i: number = 0; i < myArray.length; i++) {
        if (myArray[i] === numberToFind) {
            return i;
        }
    }
    return returnValue;
}

console.log(arrayChange([1, 1, 1]));

console.assert(arrayChange([1, 1, 1]) === 3, "arrayChange([1, 1, 1]) should equal 3");
console.assert(arrayChange([1, 1, 3]) === 1, "arrayChange([1, 1, 3]) should equal 1");
console.assert(arrayChange([1, 7, 1]) === 3, "arrayChange([1, 7, 1]) should equal 12");

console.assert(maxNumber([1, 1, 3]) === 3, "maxNumber([1, 1, 3]) should equal 3");
console.assert(maxNumber([1, 7, 1]) === 7, "maxNumber([1, 7, 3]) should equal 7");

console.assert(firstIndexContainingValue([1, 1, 3], 3) === 2, "firstIndexContainingValue([1, 1, 3], 3) should equal 2");
console.assert(firstIndexContainingValue([1, 7, 1], 7) === 1, "firstIndexContainingValue([1, 7, 1], 7) should equal 1");
