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