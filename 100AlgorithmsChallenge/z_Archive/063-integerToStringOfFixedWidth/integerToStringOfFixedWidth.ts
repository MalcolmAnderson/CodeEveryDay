function integerToStringOfFixedWidth(number: number, width: number): string {
    let returnString: string = number.toString();
    if (returnString.length > width) {
        return returnString.substring(returnString.length - width);
    } else if (returnString.length < width) {
        return '0'.repeat(width - returnString.length) + returnString;
    }
    return returnString;
}

// '34'
console.log(integerToStringOfFixedWidth(1234, 2));

// '1234'
console.log(integerToStringOfFixedWidth(1234, 4));

// '01234'
console.log(integerToStringOfFixedWidth(1234, 5));
