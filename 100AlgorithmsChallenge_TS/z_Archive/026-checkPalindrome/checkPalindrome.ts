function checkPalindrome(inputString: string): boolean {
    let tempString:string = inputString.split('').reverse().join('');
    return inputString === tempString;

}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('Aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
