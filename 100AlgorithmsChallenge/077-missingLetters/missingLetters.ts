function missingLetters(str: string): string {
    let missingLetter: string;  // undefined by design
    let previousLetterNumber: number = str[0].charCodeAt(0);
    for (let i: number = 1; i < str.length; i++) {
        if(str[i].charCodeAt(0) !== previousLetterNumber + 1){
            missingLetter = String.fromCharCode(previousLetterNumber + 1)
            break;
        } else {
            previousLetterNumber++;
        }
    }
    // returns undefined if no missing characters
    return missingLetter;
}

function missingLetters_version02(str: string): string {
    let previousLetterNumber: number = str[0].charCodeAt(0);
    for (let i: number = 1; i < str.length; i++) {
        if(str[i].charCodeAt(0) !== previousLetterNumber + 1){
            return String.fromCharCode(previousLetterNumber + 1)
        } else {
            previousLetterNumber++;
        }
    }
    return; // returns undefined by design
}

function missingLetters_version01(str: string): string {
    let missingLetter: string;
    let currentLetterNumber: number = str[0].charCodeAt(0);
    for (let i: number = 1; i < str.length; i++) {
        if(str[i].charCodeAt(0) !== currentLetterNumber + 1){
            return String.fromCharCode(currentLetterNumber + 1)
        } else {
            currentLetterNumber++;
        }
    }
    return missingLetter;
}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));