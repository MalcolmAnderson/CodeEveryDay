function allLongestStrings(inputArray: string[]): string[] {
    let sizeLongestString: number = 0;
    let returnArrary: string[] = [];
    for (let i: number = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == sizeLongestString) {
            returnArrary.push(inputArray[i]);
        }
        else if (inputArray[i].length > sizeLongestString) {
            sizeLongestString = inputArray[i].length;
            returnArrary = [];
            returnArrary.push(inputArray[i]);
        }
    }

    return returnArrary;
}

// should return ['aba','vcd','abb']
console.log(allLongestStrings(["a", "abae", "aa", "ad", "vcde", "abb"]));
console.log(allLongestStrings(["a", "b", "a", "d", "v", "b"]));
console.log(allLongestStrings(["a"]));

// Dylan's version
function allLongestStrings2(inputArray: string[]): string[] {
    let sizeLongestString: number = 0;
    let longestWords: string[] = [];

    inputArray.forEach((word: string)=>{
        sizeLongestString = sizeLongestString < word.length ? word.length : sizeLongestString;
    })

    inputArray.forEach((word: string)=>{
        if (word.length === sizeLongestString) {
            longestWords.push(word);
        }
    })
    return longestWords;
}

// should return ['aba','vcd','abb']
console.log(allLongestStrings2(["a", "abae", "aa", "ad", "vcde", "abb"]));
console.log(allLongestStrings2(["a", "b", "ab", "d", "vc", "b"]));
console.log(allLongestStrings2(["a"]));
