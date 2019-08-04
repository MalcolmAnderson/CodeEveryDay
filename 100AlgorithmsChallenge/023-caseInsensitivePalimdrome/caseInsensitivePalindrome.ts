function isCaseInsensitivePalindrome_mine(inputString: string): boolean {
    let returnValue: boolean = true;
    for (let i: number = 0; i < inputString.length / 2; i++) {
        if (inputString[i].toLowerCase() !== inputString[inputString.length - 1 - i].toLowerCase()) {
            returnValue = false;
            break;
        }
    }
    return returnValue;
}

// Dylan's version
function isCaseInsensitivePalindrome(inputString: string): boolean {
    const originalToLowerCase = inputString.toLowerCase();
    const reversedString = originalToLowerCase.split('').reverse().join('');
    return originalToLowerCase === reversedString;
}


console.assert(isCaseInsensitivePalindrome('AaBaa'), "isCaseInsensitivePalindrome('AaBaa') should be true.  Value is:", isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('AaBaa'));
console.assert(!isCaseInsensitivePalindrome('abac'), "isCaseInsensitivePalindrome('abac') should be false.  Value is:", isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('abba'));
console.log(isCaseInsensitivePalindrome('aba'));
console.log(isCaseInsensitivePalindrome('aaaaaabaaaaxa'));
