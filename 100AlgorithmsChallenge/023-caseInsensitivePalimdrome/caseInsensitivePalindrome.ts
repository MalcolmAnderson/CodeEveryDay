function isCaseInsensitivePalindrome(inputString: string): boolean {
    for (let i: number = 0; i < inputString.length / 2; i++){
        if(inputString[i].toLowerCase() !== inputString[inputString.length-1-i].toLowerCase()){
            return false;
        }
    }
    return true;
}

console.assert(isCaseInsensitivePalindrome('AaBaa'),"isCaseInsensitivePalindrome('AaBaa') should be true", isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('AaBaa'));
console.assert(isCaseInsensitivePalindrome('abac'),"isCaseInsensitivePalindrome('abac') should be false", isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('abba'));
console.log(isCaseInsensitivePalindrome('aba'));