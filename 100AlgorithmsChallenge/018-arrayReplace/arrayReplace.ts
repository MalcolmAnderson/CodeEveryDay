function arrayReplace(inputArray: number[], elementToReplace: number, replacement: number): number[] {
    for(let i: number = 0; i < inputArray.length; i++){
        if(inputArray[i]=== elementToReplace){
            inputArray.splice(i, 1, replacement);
        }
    }
    return inputArray;
}



console.log(arrayReplace([1, 2, 1], 1, 3));


let testArray: number[] = [1, 2, 3, 4, 5];

console.log(testArray.splice(2, 1, 7));
console.log(testArray);