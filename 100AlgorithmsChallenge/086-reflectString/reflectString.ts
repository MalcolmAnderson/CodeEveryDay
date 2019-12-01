function reflectString(inputString: string): string {
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
