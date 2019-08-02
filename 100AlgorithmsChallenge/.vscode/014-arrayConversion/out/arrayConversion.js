function arrayConversion(myArray) {
    var runNumber = 0;
    while (myArray.length > 1) {
        if (runNumber % 2 === 0) {
            myArray = processEachPairOfElements(myArray, "add");
        }
        else {
            myArray = processEachPairOfElements(myArray, "multiply");
        }
        runNumber++;
    }
    return myArray[0];
}
function processEachPairOfElements(myArray, operation) {
    var returnArray = [];
    for (var i = 0; i < myArray.length; i++) {
        if (i + 1 > myArray.length) {
            returnArray.push(myArray[i]);
        }
        else {
            if (operation === "add") {
                returnArray.push(myArray[i] + myArray[i + 1]);
            }
            else if (operation === "multiply") {
                returnArray.push(myArray[i] * myArray[i + 1]);
            }
            i++;
        }
    }
    return returnArray;
}
console.log(arrayConversion([8, 2, 3]));
// console.assert(arrayConversion([8, 2, 3]) === 30, "arrayConversion([8, 2, 3]) should return 30");
// console.log(arrayConversion([8, 2]));
// console.assert(arrayConversion([8, 2]) === 10, "arrayConversion([8, 2]) should return 10");
// console.log(arrayConversion([8]));
// console.assert(arrayConversion([8]) === 8, "arrayConversion([8]) should return 8");
// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
// console.assert(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) === 186, "arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) should return 186");
// console.log(arrayConversion([7, 8, 2]));
// console.assert(arrayConversion([7, 8, 2]) === 30, "arrayConversion([7, 8, 2]) should return 30");
//# sourceMappingURL=arrayConversion.js.map