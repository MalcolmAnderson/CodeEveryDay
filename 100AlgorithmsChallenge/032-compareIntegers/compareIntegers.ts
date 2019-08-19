function compareIntegers(a: string, b: string): string {
    let intA: number = parseInt(a);
    let intB: number = parseInt(b);
    let returnString = "undefined";
    if (intA < intB){
        returnString = "less";
    } else if (intA > intB){
        returnString = "greater";
    } else if (intA === intB){
        returnString = "equal";
    }
    return returnString;
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));