// Dylan's solution
function firstDigit_Dylans(inputString: string): string {
    const digits: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const chars: string[] = inputString.split('');

    for(let i: number = 0; i < inputString.length; i++){
        if(digits.includes(inputString[i])){
            return inputString[i];
        }
    }
}

// oops, I read that as find the right most
function firstDigit_mine(inputString: string): string {
    for(let i: number = inputString.length-1; i >= 0; i--){
        const c = inputString[i];
        if(c >= '0' && c <= '9'){
            return c;
        }
    }
}

// corrected
function firstDigit(inputString: string): string {
    for(let i: number = 0; i < inputString.length; i++){
        const c = inputString[i];
        if(c >= '0' && c <= '9'){
            return c;
        }
    }
}

console.log(firstDigit('v9ar_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
