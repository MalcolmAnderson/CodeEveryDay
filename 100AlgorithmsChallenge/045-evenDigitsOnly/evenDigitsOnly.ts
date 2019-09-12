function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if (typeof (expected) === "string") {
        assertString = actual + " === \"" + expected + "\"";
    } else {
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}


function evenDigitsOnly(n: number): boolean {
    const numArray: string[] = n.toString().split('');
    let returnValue: boolean = true;
    for (let i: number = 0; i < numArray.length; i++) {
        if(parseInt(numArray[i]) % 2 !== 0){
            returnValue = false;
            break;
        }
    }
    return returnValue;

}

assertIsEqual("evenDigitsOnly(248622)", true);
assertIsEqual("evenDigitsOnly(642386)", false);

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));