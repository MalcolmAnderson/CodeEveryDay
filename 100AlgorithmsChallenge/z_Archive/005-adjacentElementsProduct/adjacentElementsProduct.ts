function adjacentElementsProduct(inputArray: number[]): number{
    let highestProduct: number = 0;
    let candidateProduct: number = 0;
    for(let i: number = 0; i<inputArray.length - 1; i++){
        const candidateProduct = inputArray[i] * inputArray[i+1];
        highestProduct = candidateProduct > highestProduct ? candidateProduct : highestProduct;
    }
    return highestProduct;
}

// should be 21
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([8, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, -12, -5, 7, 3]));

