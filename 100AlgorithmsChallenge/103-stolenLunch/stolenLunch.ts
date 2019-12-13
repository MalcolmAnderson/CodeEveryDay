function stolenLunch(note: string): string {
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


    return strAsArray.join('');
}
//                                                      "you'll never guess it: 2390"
console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja")); 