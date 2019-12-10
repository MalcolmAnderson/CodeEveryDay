// My variation on Dylan's
// while I *can* do ++ and -- in the line of code, it's more obfuscated, and a bad practice
// I just wanted to find out if I *could* do it in the middle of string interpolation
// (And I *can*)
function newNumeralSystem(number: string): string[] {
    const numerals: string[] = [];
    let startCharCount = 65;
    let endCharCount = number.charCodeAt(0);

    while(startCharCount <= endCharCount) {
        const numeral = `${String.fromCharCode(startCharCount++)} + ${String.fromCharCode(endCharCount--)}`;
        numerals.push(numeral);
    }
    return numerals;
}

// Dylan's
function newNumeralSystem_Dylans(number: string): string[] {
    const numerals: string[] = [];
    let startCharCount = 65;
    let endCharCount = number.charCodeAt(0);

    while(startCharCount <= endCharCount) {
        const numeral = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`;
        numerals.push(numeral);
        startCharCount++;
        endCharCount--;
    }
    return numerals;
}


function newNumeralSystem_mine(number: string): string[] {
    const letters: object = getLetterCodeObject();
    const mathFacts: string[] = [];
    //console.log(letters['Z']);
    let oneDigitNumber: number = letters[number];
    //console.log(oneDigitNumber);
    let halfway: number = Math.floor(oneDigitNumber / 2);
    for(let i: number = 0; i <= halfway; i++){
        let partA: string = getLetterCodeFromNumber(i);
        let partB: string = getLetterCodeFromNumber(oneDigitNumber - i);
        mathFacts.push(partA + ' + ' + partB);
    }
    return mathFacts;
}   

function getLetterCodeFromNumber(num: number): string{
    let capANumberCode = 'A'.charCodeAt(0);
    return String.fromCharCode(capANumberCode + num);
}

function getLetterCodeObject(): object{
    const letters: object = {}
    let capANumberCode = 'A'.charCodeAt(0);
    for(let i: number = 0; i < 26; i++){
        letters[String.fromCharCode(capANumberCode + i)] = i;
    }
    return letters;
}

//                                   [ 'A + G', 'B + F', 'C + E', 'D + D' ]
console.log(newNumeralSystem('G'));
//                                   [ 'A + H', 'B + G', 'C + F', 'D + E' ]
console.log(newNumeralSystem('H'));