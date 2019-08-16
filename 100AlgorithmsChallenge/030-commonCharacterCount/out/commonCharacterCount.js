var arr = ['a', 'b', 'c'];
arr.splice(0, 1);
console.log(arr);
function assertIsEqual(actual, expected) {
    let assertString = "";
    if (typeof (expected) === "string") {
        assertString = actual + " === \"" + expected + "\"";
    }
    else {
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}
function commonCharacters(s1, s2) {
    // str1 should be shorter or equal to str2
    let str1 = (s2.length > s1.length ? s1.split('') : s2.split(''));
    let str2 = (s2.length > s1.length ? s2.split('') : s1.split(''));
    let myOut = [];
    while (str1.length > 0) {
        let candidate = str1[0];
        let locationInStr2 = str2.indexOf(candidate);
        if (locationInStr2 > -1) {
            myOut.push(candidate);
            str2.splice(locationInStr2, 1);
            str1.shift();
        }
    }
    let returnValue = myOut.join('');
    return returnValue;
}
let myTest = [];
myTest.push("a");
function commonCharacterCount(s1, s2) {
    return -1;
}
assertIsEqual("commonCharacters('aabcc', 'adcaa')", "aac");
assertIsEqual("commonCharacterCount('aabcc', 'adcaa')", 3);
console.log(commonCharacterCount('aabcc', 'adcaa'));
//# sourceMappingURL=commonCharacterCount.js.map