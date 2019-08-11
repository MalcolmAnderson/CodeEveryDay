function arrayReplace(inputArray: number[], elementToReplace: number, replacement: number): number[] {
    for(let i: number = 0; i < inputArray.length; i++){
        if(inputArray[i]=== elementToReplace){
            inputArray.splice(i, 1, replacement);
        }
    }
    return inputArray;
}

function dylansArrayReplace(inputArray: number[], elementToReplace: number, replacement: number): number[] {
    inputArray.forEach((element, index) => {
        if(element === elementToReplace){
            inputArray[index] = replacement;
        }
    });
    return inputArray;
}


console.log(dylansArrayReplace([1, 2, 1], 1, 3));

console.log(arrayReplace([1, 2, 1], 1, 3));


let testArray: number[] = [1, 2, 3, 4, 5];

console.log(testArray.splice(2, 1, 7));
console.log(testArray);