// I did not originally solve for firstNumber being greater than n / 2
function circleOfNumbers(n: number, firstNumber: number): number {
    if (firstNumber < n/2){
    return Math.floor(n/2) + firstNumber;
    } else{
        return firstNumber - Math.floor(n/2);
    }
}


 function assertIsEqual(actual: string, expected: any) {
    let assertString: string = actual + " === " + expected;
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}

 function assertIsTrue(actual: string) {
    console.assert(eval(actual), (actual + " should be true but is"), eval(actual));
}
 function assertIsFalse(actual: string) {
    console.assert(!eval(actual), (actual + " should be false but is"), eval(actual));
}

assertIsTrue("false");
assertIsFalse("true");

assertIsEqual("circleOfNumbers(10, 2)", 7);
assertIsEqual("circleOfNumbers(10, 7)", 2);

let actual: string = "circleOfNumbers(10, 2)";
let expected = 7;
let assertString: string = actual + " === " + expected;
let message: string = actual + " should equal " + expected + " but is";
console.log(assertString);
console.log(message)

console.assert(circleOfNumbers(10, 2) === 7, "circleOfNumbers(10, 2) should equal 7 but is", circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 7));