// dylan's version using back-ticks ('`' == 'lower case ~"')
function encloseInBrackets(inputString: string): string {
    return `(${inputString})`;
}

function encloseInBrackets_mine(inputString: string): string {
    return "(" + inputString + ")";
}

console.log(encloseInBrackets('abacaba'));