function newNumeralSystem(number: string): string[] {
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

console.log(newNumeralSystem('G'));
console.log(newNumeralSystem('H'));