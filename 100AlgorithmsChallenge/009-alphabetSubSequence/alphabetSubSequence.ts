function alphabetSubSequence(inputString: string):boolean{
    let stringArray: string[] = inputString.split("");
    let currentLetterNumber = 0;
    let returnCode:boolean = true;
    stringArray.forEach((letter: string)=>{
        if(letter.charCodeAt(0)>currentLetterNumber){
            currentLetterNumber = letter.charCodeAt(0);
        }
        else{
            returnCode = false;
        }
    })
    return returnCode;
}

// should return true
console.log(alphabetSubSequence("aceg"));
console.log(alphabetSubSequence("ace"));
console.log(alphabetSubSequence("bxz"));
// should return false
console.log(alphabetSubSequence("effg"));
console.log(alphabetSubSequence("cdce"));

function testReturnFalseInsideAForEach():boolean{
    let myString: string = "test";
    let stringArray: string[] = myString.split("");
    stringArray.forEach((letter: string)=>{
        return false;
    })
    return true;
}

console.log(testReturnFalseInsideAForEach());