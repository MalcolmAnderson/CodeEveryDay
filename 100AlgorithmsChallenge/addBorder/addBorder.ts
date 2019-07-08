function getLongestLine(myInput: string[]): number {
    var longestLine = 0;
    for (var i = 0; i < myInput.length; i++) {
        if (myInput[i].length > longestLine) {
            longestLine = myInput[i].length;
        }
    }
    return longestLine;
}

function addBorder(myInput: string[]): string[] {
    var longestLine = getLongestLine(myInput);
    let wallChar = '*';
    let fillerChar = '.'; // swap ' ' and '.' for production vs debugging

    let wall = wallChar.repeat(longestLine + 2); 

    for (var i = 0; i < myInput.length; i++) {
        var fillerLength = longestLine - myInput[i].length;
        myInput[i] = generateReplacetmentLine(myInput[i], fillerLength, wallChar, fillerChar);;
    }

    myInput.unshift(wall);
    myInput.push(wall);

    return myInput;
}


function generateReplacetmentLine(inputLine, fillerLength, wallChar, fillerChar) {
    var filler = "";
    if (fillerLength > 0) {
        filler = fillerChar.repeat(fillerLength); 
    }
    else {
        filler = "";
    }
    var replacement = wallChar + inputLine + filler + wallChar;
    return replacement;
}


console.log(generateReplacetmentLine(["a"], 4, '*', '.'))

console.log(getLongestLine(["a", "abcd"]))

console.log(addBorder(["a", "abc"]));
console.log(addBorder(["a", "abcde"]));

// a
// abc
//
// *****
// *a  *
// *abc*
// *****   
