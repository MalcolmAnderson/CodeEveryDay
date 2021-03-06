function avoidObstacles(inputArray: number[]): number {
    let sortedArray: number[] = inputArray.sort((a, b) => a - b);
    let highestNumberInArray: number = sortedArray[sortedArray.length - 1];
    for (let i: number = 2; i <= highestNumberInArray + 1; i++) {
        if(sortedArray.every((element)=> element % i !== 0)){
            return i;
        }
    }
    return -1;
}

function avoidObstaclesOriginal(inputArray: number[]): number {
    let sortedArray: number[] = inputArray.sort((a, b) => a - b);
    let highestNumberInArray: number = sortedArray[sortedArray.length - 1];
    let smallestJump = highestNumberInArray + 1;
    for (let i: number = smallestJump - 2; i > 1; i--) {
        if (jumpAvoidsObstacles(sortedArray, i, highestNumberInArray)) {
            smallestJump = i;
        }
    }
    return smallestJump;
}

function jumpAvoidsObstacles(inputArray: number[], jumpSizeCandidate:number, highestNumberInArray:number) {
    let i: number = 1;
    while ((i * jumpSizeCandidate) <= highestNumberInArray) {
        if (inputArray.includes(i * jumpSizeCandidate)) {
            return false;
        }
        i++;
    }
    return true;
}

let testArray: number[] = [6, 3, 5, 9, 7];
let testArray2: number[] = [1, 3, 5, 9, 7];
let testArray3: number[] = [1, 2, 5, 11, 7, 14];
let testArray4: number[] = [1, 2, 5, 11, 7, 15];
let testArray5: number[] = [1, 3, 5, 11, 7, 25, 26, 15];
let testArray6: number[] = [1, 3, 5, 11, 7, 25, 27, 15];
let testArray7: number[] = [1, 3];
console.log(testArray.includes(3));
console.assert(avoidObstacles(testArray7) === 2, "avoidObstacles(array7) should return 2");
console.assert(avoidObstacles(testArray6) === 2, "avoidObstacles(array6) should return 2");
console.assert(avoidObstacles(testArray5) === 4, "avoidObstacles(array5) should return 4");
console.assert(avoidObstacles(testArray4) === 4, "avoidObstacles(array4) should return 4");
console.assert(avoidObstacles(testArray3) === 3, "avoidObstacles(array3) should return 3");
console.assert(avoidObstacles(testArray2) === 2, "avoidObstacles(array2) should return 2");
console.assert(avoidObstacles(testArray) === 4, "avoidObstacles(array) should return 4");
console.log(avoidObstacles([6, 3, 5, 9, 7]));
console.log(avoidObstacles(testArray3));
console.log(avoidObstacles(testArray4));
console.log(avoidObstacles(testArray5));
console.log(avoidObstacles(testArray6));
console.log(avoidObstacles(testArray7));
console.log((testArray.sort()));
console.log(testArray);
