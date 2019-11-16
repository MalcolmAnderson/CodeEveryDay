// dylan's version
function missingLetters(str: string): string {
    const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let chars = str.split('');
    for(let i: number = 0; i < chars.length; i++){
        if(chars[i] !== alphabet[i]) {
            return alphabet[i];
        }
    }
    return;
}

// my variation on dylan's version
function missingLetters_version04(str: string): string {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    // find first str[] letter in alphabet
    let letterOffset = alphabet.indexOf(str[0]);
    for(let i: number = 0; i < str.length; i++){
        if(alphabet[i + letterOffset] !== (str[i])){
            return alphabet[i + letterOffset];
        }
    }
    return;
}

function missingLetters_version03(str: string): string {
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

// answer depends on whether "bce" should return 'a' or 'd';
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));