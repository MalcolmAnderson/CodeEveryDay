function adjacentElementsProduct(inputArray: number[]): number{
    let highest: number = 0;
    let candidate: number = 0;
    for(let i: number = 0; i<inputArray.length - 1; i++){
        candidate = inputArray[i] * inputArray[i+1];
        highest = candidate > highest ? candidate : highest;
    }
    return highest;


}

// should be 21
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

