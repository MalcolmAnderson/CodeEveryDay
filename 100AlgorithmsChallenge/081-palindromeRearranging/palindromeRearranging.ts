function palindromeRearranging(inputString: string): boolean {
    const charCount: object = getCharacterCountsFromString(inputString);
    return isPalindromeIfNoMoreThanOneCharCountIsOdd(charCount);
}

function isPalindromeIfNoMoreThanOneCharCountIsOdd(charCount: object): boolean{
    let oddCount = 0;
    for(let element in charCount){
        if(charCount[element] % 2 !== 0){
            oddCount++;
        }
    }
    return oddCount > 1 ? false : true;
}

function getCharacterCountsFromString(inputString: string): object{
    const charCount: object = {};
    const chars = inputString.split('');
    for(let char of chars){
        if(charCount.hasOwnProperty(char)){
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('daabb'));
console.log(palindromeRearranging('edaabb'));





