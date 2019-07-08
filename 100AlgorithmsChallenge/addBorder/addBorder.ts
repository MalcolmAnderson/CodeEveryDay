function getLongestLine(myInput: string[]): number{
    console.log(myInput[1].length)
    console.log(myInput[0].length)
    console.log(myInput.length)
    var longestLine = 0;
    for (var i=0; i<myInput.length; i++){
        if (myInput[i].length > longestLine){
            longestLine = myInput[i].length;
        }
    }
    return longestLine;
}



function addBorder(myInput: string[]): string[]{

    //const longestLine: number = 6;
    var longestLine = getLongestLine(myInput);


    var output: string[] = [];
    

    let wall = '*'.repeat(longestLine+2);

    for (var i =0; i<myInput.length; i++){
        var spaces = longestLine - myInput[0].length;
        var filler = "";
        if (spaces > 0){
            filler = '.'.repeat(spaces); // swap ' ' and '.' for production vs debugging
        }
        else{
            filler = "";
        }
        var replacement = "*" + myInput[i] + filler + "*";
        myInput[i] = replacement;
    }


    var test = myInput[0]

    myInput.unshift(wall);
    myInput.push(wall);

    return myInput;

    //return ["*****","*a   *"]

}

console.log(getLongestLine(["a","abcd"]))

console.log(addBorder(["a","abc"]));
console.log(addBorder(["a","abcde"]));
//console.log(addBorder(2, 4, 6, 8, 10));


// a
// abc
//
// *****
// *a  *
// *abc*
// *****   
