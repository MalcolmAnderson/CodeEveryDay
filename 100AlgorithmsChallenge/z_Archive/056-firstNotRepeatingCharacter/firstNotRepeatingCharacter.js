"use strict";
// new version
function assertIsEqual(actual, expected) {
    var assertString = "";
    if (typeof (expected) === "string") {
        assertString = actual + " === \"" + expected + "\"";
    }
    else {
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}
function firstNotRepeatingCharacter_mine(s) {
    var returnVal = "_";
    var repeating = [];
    var nonRepeating = [];
    for (var i = 0; i < s.length; i++) {
        if (!repeating.includes(s[i])) {
            var indexOfCandidate = nonRepeating.indexOf(s[i]);
            if (indexOfCandidate > -1) {
                repeating.push(s[i]);
                nonRepeating.splice(indexOfCandidate, 1);
            }
            else {
                nonRepeating.push(s[i]);
            }
        }
    }
    if (nonRepeating.length > 0) {
        returnVal = nonRepeating[0];
    }
    return returnVal;
}
// Dylans
function firstNotRepeatingCharacter(s) {
    var chars = s.split('');
    var duplicates = {};
    var answer = '_';
    var indexAnswer = Number.MAX_SAFE_INTEGER;
    chars.forEach(function (element, index) {
        if (!duplicates.hasOwnProperty(element)) {
            duplicates[element] = {
                count: 1,
                index: index
            };
        }
        else {
            duplicates[element].count++;
            duplicates[element].index = index;
        }
    });
    for (var key in duplicates) {
        if (duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
            answer = key;
            indexAnswer = duplicates[key].index;
        }
    }
    return answer;
}
assertIsEqual("firstNotRepeatingCharacter('abacabad')", 'c');
assertIsEqual("firstNotRepeatingCharacter('abacabaabacaba')", '_');
console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
