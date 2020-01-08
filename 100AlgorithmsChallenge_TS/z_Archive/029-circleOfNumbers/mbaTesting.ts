export function assertIsEqual(actual: string, expected: any) {
    let assertString: string = actual + " === " + expected;
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}

export function assertIsTrue(actual: string) {
    console.assert(eval(actual), (actual + " should be true but is"), eval(actual));
}
export function assertIsFalse(actual: string) {
    console.assert(!eval(actual), (actual + " should be false but is"), eval(actual));
}
