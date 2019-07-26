function addEscapeToAllAngleBrakets(inputString: string): string {
    let newString: string = "";
    for(let i: number = 0; i<inputString.length; i++){
        if(inputString[i]==='\\' || inputString[i] === '<' || inputString[i] === '>'){
            newString += '\\';
        }
        newString += inputString[i];
    }
    return newString;
}


let testString: string = "<hello> world\\";
console.log(addEscapeToAllAngleBrakets(testString));