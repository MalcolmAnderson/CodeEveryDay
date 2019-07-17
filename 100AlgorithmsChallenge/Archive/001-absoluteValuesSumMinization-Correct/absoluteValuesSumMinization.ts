// while this is a MUCH better version of the code, it's also the correct interpretation of the problem
function absoluteValuesSumMinization(sortedArray: number[]): number {
    let lastValue: number = returnSingleAttempt(sortedArray, 0);
    let thisValue: number = returnSingleAttempt(sortedArray, 1);
    let stillGoingDown: boolean = thisValue < lastValue;
    let currentIndex: number = 1
    while (stillGoingDown){
        currentIndex ++;
        lastValue = thisValue;
        thisValue = returnSingleAttempt(sortedArray, currentIndex);
        stillGoingDown = thisValue < lastValue;
    }

    return currentIndex - 1;
}

function returnSingleAttempt(myArray: number[], myNumber: number): number{
    let current: number = 0;
    for (let i: number = 0; i < myArray.length; i++) {
        current += Math.abs(myArray[i] - myNumber);
    }

    return current;
}
let testArray: number[] = [2, 4, 7, 6, 6, 8]
console.log(returnSingleAttempt(testArray, 0));
console.log(returnSingleAttempt(testArray, 1));
console.log(returnSingleAttempt(testArray, 2));
console.log(returnSingleAttempt(testArray, 3));
console.log(returnSingleAttempt(testArray, 4));
console.log(returnSingleAttempt(testArray, 5));
console.log(returnSingleAttempt(testArray, 6));
console.log(returnSingleAttempt(testArray, 7));


console.log(absoluteValuesSumMinization([2, 4, 7]));
console.log(absoluteValuesSumMinization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]));

console.assert(absoluteValuesSumMinization([2, 4, 7]) === 4, "[2, 4, 7] should equal 4");
console.assert(absoluteValuesSumMinization([2, 4, 7, 6]) === 4, "[2, 4, 7, 6] should equal 4");
console.assert(absoluteValuesSumMinization([2, 4, 7, 6, 6]) === 7, "[2, 4, 7, 6] should equal 7");
console.assert(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]) === 7, "[2, 4, 7, 6] should equal 7");


