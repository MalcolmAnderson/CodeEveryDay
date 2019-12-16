function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function stolenLunch_firstPass_ReadTheRequirements(note: string): string {
    const char2num: object = {
        "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7,
        "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13,
        "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20,
        "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26
    }
    const strAsArray = note.split('');
    const restOfString = strAsArray.splice(strAsArray.indexOf(' '));
    console.log(strAsArray.join(''))
    console.log(restOfString.join(''));
    console.log(char2num.hasOwnProperty("a"));
    console.log(getKeyByValue(char2num, ";"))
    for (let i: number = 0; i < restOfString.length; i++) {
        if (char2num.hasOwnProperty(restOfString[i])) {
            strAsArray.push(char2num[char2num[i]]);
        }
    }

    return strAsArray.join('');
}
console.log(isNaN(' '));
function stolenLunch(note: string): string {
    const strAsArray: string[] = note.split('');
    const outPutArray: string[] = [];
    let afterColon: boolean = false;
    for (let i: number = 0; i < strAsArray.length; i++) {
        if (!afterColon || strAsArray[i] === ' ') {
            if (isNaN(Number(strAsArray[i])) || strAsArray[i] === ' ') {
                outPutArray.push(strAsArray[i]);
            } else {
                outPutArray.push(String.fromCharCode('a'.charCodeAt(0) + parseInt(strAsArray[i])));
            }
            if (strAsArray[i] === ':') { afterColon = true; }
        } else {
            console.log('a' + strAsArray[i] + 'a');
            console.log(strAsArray[i].charCodeAt(0))
            const difference: number = strAsArray[i].charCodeAt(0) - 'a'.charCodeAt(0);
            outPutArray.push(difference.toString());
        }
    }
    return outPutArray.join('');
}
console.log('g'.charCodeAt(0) - 'a'.charCodeAt(0);

console.log('c'.charCodeAt(0) - 'a'.charCodeAt(0));

//                                                        "you'll never guess it: 2390"
console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja")); 