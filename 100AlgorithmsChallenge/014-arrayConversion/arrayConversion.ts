function arrayConversion(myArray: number[]): number {
    let returnValue: number = 0;
    if (myArray.length === 1) {
        returnValue = myArray[0];
    } else {
        let runNumber: number = 0;
        while (myArray.length > 1) {
            if (runNumber % 2 === 0) {
                myArray = sumEachPairOfElements(myArray);
            }
            else {
                myArray = multiplyEachPairOfElements(myArray);
            }
            runNumber++;
        }
    }
    return myArray[0];
}

function sumEachPairOfElements(myArray: number[]): number[]{
    return [8];
}


function multiplyEachPairOfElements(myArray: number[]): number[]{
    return [8];
}




console.log(arrayConversion([8, 2, 3]));
console.assert(arrayConversion([8, 2, 3]) === 30, "arrayConversion([8, 2, 3]) should return 30");

console.log(arrayConversion([8, 2]));
console.assert(arrayConversion([8, 2]) === 10, "arrayConversion([8, 2]) should return 10");

console.log(arrayConversion([8]));
console.assert(arrayConversion([8]) === 8, "arrayConversion([8]) should return 8");



console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.assert(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) === 186, "arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) should return 186");

console.log(arrayConversion([7, 8, 2]));
console.assert(arrayConversion([7, 8, 2]) === 30, "arrayConversion([7, 8, 2]) should return 30");
