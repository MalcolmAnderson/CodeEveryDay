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
    const digits: string[] = n.toString().split('');
    return digits.every((digit => parseInt(digit) % 2 === 0));
}

function evenDigitsOnly_dylans_modified(n: number): boolean {
    const numArray: string[] = n.toString().split('');
    let returnValue: boolean = numArray.every((numElement => parseInt(numElement) % 2 === 0));
    return returnValue;
}

function evenDigitsOnly_mine(n: number): boolean {
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