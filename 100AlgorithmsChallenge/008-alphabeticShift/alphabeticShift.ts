function alphabeticShift(inputString: string): string {
    let workbench: string[] = inputString.split("");
    let outputArray: string[] = [];
    workbench.forEach((letter: string) => {
        outputArray.push(nextChar(letter));
    })
    return outputArray.join('');
}

function nextChar(c: string):string{
    if(c != 'z' && c != 'Z'){
        return String.fromCharCode(c.charCodeAt(0)+1)
    }
    else{
        return String.fromCharCode(c.charCodeAt(0)-25
    }
}

console.log(nextChar('a'));
console.log(nextChar('z'));

console.log(nextChar('A'));
console.log(nextChar('Z'));

// should return "dsbaz"
console.log(alphabeticShift("crazy"));