function addEscapeToAllAngleBrakets(inputString) {
    var newString = "";
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === '\\' || inputString[i] === '<' || inputString[i] === '>') {
            newString += '\\';
        }
        newString += inputString[i];
    }
    return newString;
}
var testString = "<hello> world\\";
console.log(addEscapeToAllAngleBrakets(testString));
//# sourceMappingURL=addEscapeToAllAngleBrakets.js.map