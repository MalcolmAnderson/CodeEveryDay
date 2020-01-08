function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if (typeof (expected) === "string") {
        assertString = actual + " === \"" + expected + "\"";
    } else {
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}




// Dylan's third way of doing it
function differentSymbolsNaive(s: string): number {
    const uniqueChars = new Set();
    const inputChars: string[] = s.split('');
    inputChars.forEach((currentChar) => {
        uniqueChars.add(currentChar);
    })
    return Object.keys(uniqueChars).length;
}

// Dylan's second way of doing it
function differentSymbolsNaive_DylansNumberTwo(s: string): number {
    const uniqueChars: Object = {};
    const inputChars: string[] = s.split('');
    inputChars.forEach((currentChar) => {
        uniqueChars[currentChar] = 1;
    })
    return Object.keys(uniqueChars).length;
}

// Dylan's first way of doing it
function differentSymbolsNaive_DylansNumberOne(s: string): number {
    const uniqueChars: string[] = [];
    const inputChars: string[] = s.split('');
    inputChars.forEach((currentChar) => {
        if (!uniqueChars.includes(currentChar)) {
            uniqueChars.push(currentChar);
        }
    })
    return uniqueChars.length;
}

function differentSymbolsNaive_mine(s: string): number {
    let bag: string[] = [];
    for (let i: number = 0; i < s.length; i++) {
        if (!bag.includes(s[i])) {
            bag.push(s[i]);
        }
    }
    return bag.length;
}

assertIsEqual("differentSymbolsNaive('cabca')", 3);

console.log(differentSymbolsNaive('cabca'));
