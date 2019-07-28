function avoidObstacles(inputArray: number[]): number {
    let sortedArray: number[] = inputArray.sort(sortNumber);
    let smallestJump = sortedArray[sortedArray.length-1] + 1;
    for(let i: number = smallestJump - 1; i>=0; i--){
        if(jumpAvoidsObstacles(sortedArray, i)){
            smallestJump = i;
        }
    }
    return smallestJump;
}

function sortNumber(a, b) {
    return a - b;
  }

function jumpAvoidsObstacles(inputArray, jumpSizeCandidate){
    let highestNumber = inputArray[inputArray.length -1];
    for(let i: number = 0; i < 10; i++){
        if(i*jumpSizeCandidate > highestNumber){
            return true;
        }
        if(inputArray.includes(i*jumpSizeCandidate)){
            return false;
        }
        
    }
    return false;
}

let testArray: number[] = [6, 3, 5, 9, 7];
let testArray2: number[] = [1, 3, 5, 9, 7];
let testArray3: number[] = [1, 2, 5, 11, 7, 14];
let testArray4: number[] = [1, 2, 5, 11, 7, 15];
console.log(testArray.includes(3));
console.assert(avoidObstacles(testArray2) === 2, "avoidObstacles(array2) should return 2");
console.assert(avoidObstacles(testArray) === 4, "avoidObstacles(array) should return 4");
console.log(avoidObstacles([6, 3, 5, 9, 7]));
console.log(avoidObstacles(testArray3));
 console.log(avoidObstacles(testArray4));
console.log((testArray.sort()));
console.log(testArray);
