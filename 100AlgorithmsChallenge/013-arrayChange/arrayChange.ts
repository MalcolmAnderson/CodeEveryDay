function arrayChange(myArray: number[]): number {
    let highestValue: number = getMaxNumberInArray(myArray);
    let indexOfHighestValue = firstIndexContainingValue(myArray, highestValue);
    let incrementCounter: number = 0;
    let positionOffset: number = 0;
    for(let i: number = indexOfHighestValue - 1; i >= 0; i--){
        positionOffset++;
        incrementCounter += highestValue - positionOffset - myArray[i];
    }
    positionOffset = 0;
    for(let i: number = indexOfHighestValue + 1; i < myArray.length; i++){
        positionOffset++;
        incrementCounter += highestValue + positionOffset - myArray[i];
    }
    return incrementCounter;
}

function getMaxNumberInArray(myArray: number[]): number {
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
console.log(arrayChange([1, 1, 3]));
console.log(arrayChange([1, 7, 1]));
console.log(arrayChange([12, 7, 1]));
console.log(arrayChange([1, 7, -5]));
console.log(arrayChange([1, 7, 10]));

console.assert(arrayChange([1, 1, 1]) === 3, "arrayChange([1, 1, 1]) should equal 3");
console.assert(arrayChange([1, 1, 3]) === 1, "arrayChange([1, 1, 3]) should equal 1");
console.assert(arrayChange([1, 7, 1]) === 12, "arrayChange([1, 7, 1]) should equal 12");
console.assert(arrayChange([12, 7, 1]) === 19, "arrayChange([1, 7, 1]) should equal 19");
console.assert(arrayChange([1, 7, -5]) === 18, "arrayChange([1, 7, 1]) should equal 12");
console.assert(arrayChange([1, 7, 10]) === 9, "arrayChange([1, 7, 1]) should equal 12");

console.assert(getMaxNumberInArray([1, 1, 3]) === 3, "maxNumber([1, 1, 3]) should equal 3");
console.assert(getMaxNumberInArray([1, 7, 1]) === 7, "maxNumber([1, 7, 3]) should equal 7");

console.assert(firstIndexContainingValue([1, 1, 3], 3) === 2, "firstIndexContainingValue([1, 1, 3], 3) should equal 2");
console.assert(firstIndexContainingValue([1, 7, 1], 7) === 1, "firstIndexContainingValue([1, 7, 1], 7) should equal 1");
