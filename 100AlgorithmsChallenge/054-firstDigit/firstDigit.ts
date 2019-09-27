function firstDigit(inputString: string): string {
    for(let i: number = inputString.length-1; i >= 0; i--){
        const c = inputString[i];
        if(c >= '0' && c <= '9'){
            return c;
        }
    }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
