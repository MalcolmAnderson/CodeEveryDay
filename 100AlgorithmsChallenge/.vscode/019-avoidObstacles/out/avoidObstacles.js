function avoidObstacles(inputArray) {
    var sortedArray = inputArray.sort(sortNumber);
    var smallestJump = sortedArray[sortedArray.length - 1] + 1;
    for (var i = smallestJump - 2; i >= 0; i--) {
        if (jumpAvoidsObstacles(sortedArray, i)) {
            smallestJump = i;
        }
    }
    return smallestJump;
}
function sortNumber(a, b) {
    return a - b;
}
function jumpAvoidsObstacles(inputArray, jumpSizeCandidate) {
    var highestNumber = inputArray[inputArray.length - 1];
    var i = 1;
    while ((i * jumpSizeCandidate) <= highestNumber) {
        if (inputArray.includes(i * jumpSizeCandidate)) {
            return false;
        }
        i++;
    }
    return true;
}
var testArray = [6, 3, 5, 9, 7];
var testArray2 = [1, 3, 5, 9, 7];
var testArray3 = [1, 2, 5, 11, 7, 14];
var testArray4 = [1, 2, 5, 11, 7, 15];
var testArray5 = [1, 3, 5, 11, 7, 25, 26, 15];
var testArray6 = [1, 3, 5, 11, 7, 25, 27, 15];
var testArray7 = [1, 3];
//console.log(testArray.includes(3));
// console.assert(avoidObstacles(testArray2) === 2, "avoidObstacles(array2) should return 2");
// console.assert(avoidObstacles(testArray) === 4, "avoidObstacles(array) should return 4");
// console.log(avoidObstacles([6, 3, 5, 9, 7]));
console.log(avoidObstacles(testArray7));
// console.log(avoidObstacles(testArray4));
// console.log(avoidObstacles(testArray5));
// console.log(avoidObstacles(testArray6));
// console.log((testArray.sort()));
// console.log(testArray);
//# sourceMappingURL=avoidObstacles.js.map