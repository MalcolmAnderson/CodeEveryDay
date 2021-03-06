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
console.log(isNaN(Number(' ')));
function stolenLunch_secondPass(note: string): string {
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


function stolenLunch_3rdPass(note: string): string {
    const outputArray: string[] = [];
    const char2num: object = {
        "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6,
        "h": 7, "i": 8, "j": 9
    };
    const strAsArray = note.split('');
    for (let i: number = 0; i < strAsArray.length; i++) {
        if (char2num.hasOwnProperty(strAsArray[i])) {
            outputArray.push(char2num[strAsArray[i]]);
        } else if (isNaN(parseInt((char2num[i])))) {
            outputArray.push(strAsArray[i]);
        } else {
            outputArray.push((strAsArray[i].charCodeAt(0) - 'a'.charCodeAt(0)).toString());
        }
    }
    return outputArray.join('');
}

// Dylan's 
function stolenLunch(note: string): string {
    const chars = note.split('');
    let translatedMessage: string = '';
    const codeDictionary: object = {
        "a": "0", "b": "1", "c": "2", "d": "3", "e": "4",
        "f": "5", "g": "6", "h": "7", "i": "8", "j": "9",
        "0": "a", "1": "b", "2": "c", "3": "d", "4": "e",
        "5": "f", "6": "g", "7": "h", "8": "i", "9": "j"
    };
    for (let char of chars) {
        if (codeDictionary.hasOwnProperty(char)) {
            translatedMessage += codeDictionary[char];
        } else {
            translatedMessage += char;
        }
    }
    return translatedMessage;
}


console.log('g'.charCodeAt(0) - 'a'.charCodeAt(0));

console.log('c'.charCodeAt(0) - 'a'.charCodeAt(0));
console.log('0'.charCodeAt(0));
console.log('9'.charCodeAt(0));
console.log(!isNaN(Number('9')))
console.log(!isNaN(parseInt('9')));
console.log(stolenLunch("4"));
// console.log(stolenLunch("1")); 
//                                                        "you'll never guess it: 2390"
console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja")); 
