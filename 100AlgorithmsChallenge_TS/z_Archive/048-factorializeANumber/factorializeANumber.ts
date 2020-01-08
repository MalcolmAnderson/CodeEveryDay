function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if (typeof (expected) === "string") {
        assertString = actual + " === \"" + expected + "\"";
    } else {
        assertString = actual.toString() + " === " + expected.toString();
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}


function factorializeANumber(num: number): number {
    if (num === 0) {
        return 1;
    }
    return num * factorializeANumber(num - 1);
}

function factorializeANumber_first(num: number): number {
    let total: number = 1;
    for (let i: number = 2; i <= num; i++) {
        total *= i;
    }
    return total;
}

assertIsEqual("factorializeANumber(5)", 120);
assertIsEqual("factorializeANumber(10)", 3628800);



console.log(factorializeANumber(5));
console.log(factorializeANumber(10));