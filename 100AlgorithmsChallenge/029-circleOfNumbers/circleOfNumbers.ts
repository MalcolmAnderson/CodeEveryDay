function circleOfNumbers(n: number, firstNumber: number): number {
    return -1;
}


function myIsEqualAssert(actual: string, expected: any) {
    let assertString: string = actual + " === " + expected;
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}

function myIsTrueAssert(actual: string) {
    console.assert(eval(actual), (actual + " should be true but is"), eval(actual));
}
function myIsFalseAssert(actual: string) {
    console.assert(!eval(actual), (actual + " should be false but is"), eval(actual));
}

myIsTrueAssert("false");
myIsFalseAssert("true");

myIsEqualAssert("circleOfNumbers(10, 2)", 7);

let actual: string = "circleOfNumbers(10, 2)";
let expected = 7;
let assertString: string = actual + " === " + expected;
let message: string = actual + " should equal " + expected + " but is";
console.log(assertString);
console.log(message)

console.assert(circleOfNumbers(10, 2) === 7, "circleOfNumbers(10, 2) should equal 7 but is", circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 2));