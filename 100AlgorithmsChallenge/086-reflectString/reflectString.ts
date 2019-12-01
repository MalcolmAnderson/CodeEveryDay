// Caleb E's version (crazy slick)
function reflectString(inputString: string): any {
    const firstLetterCode = 'a'.charCodeAt(0);
    const alphabetRange = 25; // zero based index

    return inputString
        .toLowerCase()
        .split('')
        .map(char => {
            // must be alphabetic character
            if (char.match(/\W|\d/)) return char;

            const alphaBased0 = char.charCodeAt(0) - firstLetterCode;
            const mirrorAlpha = alphabetRange - alphaBased0;
            return String.fromCharCode(firstLetterCode + mirrorAlpha);
        })
        .join('');
}

function reflectString_dylans(inputString: string): string {
    const chars: string[] = inputString.split('');
    const reflectionLetters: object = {
        a: 'z', b: 'y', c: 'x', d: 'w',
        e: 'v', f: 'u', g: 't', h: 's',
        i: 'r', j: 'q', k: 'p', l: 'o',
        m: 'n', n: 'm', o: 'l', p: 'k',
        q: 'j', r: 'i', s: 'h', t: 'g',
        u: 'f', v: 'e', w: 'd', x: 'c',
        y: 'b', z: 'a'
    }
    let reflectedWord = '';
    chars.forEach((char) => {
        reflectedWord += reflectionLetters[char];
    })
    return reflectedWord;
}

function reflectString_mine(inputString: string): string {
    const output: string[] = [];
    inputString = inputString.toLowerCase();
    for (let i: number = 0; i < inputString.length; i++) {
        output.push(getReflectiveLetterFromNumberOffset(getCharDistance(inputString[i])));
    }
    return output.join('');
}

function getCharDistance(char: string): number {
    if (char.length > 1) {
        return 0; // illegal length
    }
    if (char < 'n') {
        return char.charCodeAt(0) - 'n'.charCodeAt(0);
    } else {
        return char.charCodeAt(0) - 'm'.charCodeAt(0);
    }
}

function getReflectiveLetterFromNumberOffset(offset: number): string {
    let source: string = offset > 0 ? 'n' : 'm';
    return String.fromCharCode(source.charCodeAt(0) - offset);
}

console.log(getReflectiveLetterFromNumberOffset(-5))
console.log(getCharDistance('a'))

//                                   mznv
console.log(reflectString("name"));
