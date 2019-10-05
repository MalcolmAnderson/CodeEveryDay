// new version
function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if (typeof (expected) === "string") {
        assertString = actual + " === \"" + expected + "\"";
    } else {
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}




function firstNotRepeatingCharacter(s: string): string {
    let returnVal: string = "_";
    const repeating: string[] = [];
    const nonRepeating: string[] = [];
    for (let i: number = 0; i < s.length; i++) {
        if (!repeating.includes(s[i])) {
            const indexOfCandidate = nonRepeating.indexOf(s[i]);
            if (indexOfCandidate > -1) {
                repeating.push(s[i]);
                nonRepeating.splice(indexOfCandidate, 1);
            } else {
                nonRepeating.push(s[i]);
            }
        }
    }
    if (nonRepeating.length > 0) {
        returnVal = nonRepeating[0];
    }

    return returnVal;
}


assertIsEqual("firstNotRepeatingCharacter('abacabad')", 'c');
assertIsEqual("firstNotRepeatingCharacter('abacabaabacaba')", '_');

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
