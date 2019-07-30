// Math in loops is not working - next step is to walk the code
function absoluteValuesSumMinization(sortedArray) {
    var highestValue = sortedArray[sortedArray.length - 1];
    var lowestValue = highestValue;
    var processedValues = [];
    for (var i = 0; i < highestValue; i++) {
        var current = 0;
        for (var j = 0; j < sortedArray.length; j++) {
            current += Math.abs(sortedArray[j] - i);
        }
        processedValues.push(current);
    }
    //console.log(processedValues)
    var goingDown = true;
    var lowestIndex = 0;
    for (var i = 0; goingDown && i < processedValues.length; i++) {
        goingDown = processedValues[i] - processedValues[i + 1] > 0;
        lowestIndex = i;
    }
    processedValues.sort();
    //console.log(processedValues)
    return lowestIndex;
}
// console.log(absoluteValuesSumMinization([2, 4, 7]));
// console.log(absoluteValuesSumMinization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]));
console.assert(absoluteValuesSumMinization([2, 4, 7]) === 4, "[2, 4, 7] should equal 4");
console.assert(absoluteValuesSumMinization([2, 4, 7, 6]) === 4, "[2, 4, 7, 6] should equal 4");
console.assert(absoluteValuesSumMinization([2, 4, 7, 6, 6]) === 7, "[2, 4, 7, 6] should equal 7");
console.assert(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]) === 7, "[2, 4, 7, 6] should equal 7");
//# sourceMappingURL=absoluteValuesSumMinization.js.map