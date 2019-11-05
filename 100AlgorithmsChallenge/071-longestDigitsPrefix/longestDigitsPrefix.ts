function longestDigitsPrefix(inputString: string): string {
    const prefix: string[] = [];
    for(let i: number = 0; i < inputString.length; i++){
        let candidate: number = parseInt(inputString[i]);
        console.log(candidate);
        if(isNaN(candidate)) {
            return prefix.join();
        } else {
            prefix.push(inputString[i]);
        }
    }
    return prefix.join();
}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('12aa1'));
console.log(longestDigitsPrefix('123456aa1'));
