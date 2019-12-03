function reverseAString(str: string): string {
    let output: string = "";
    for (let i: number = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));