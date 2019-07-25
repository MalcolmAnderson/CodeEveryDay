function arrayPreviousLess(items: number[]): number[] {
    let outputArray: number[] = [-1];
    for(let i: number = 1; i < items.length; i++){
        let valueToPush: number = -1;
        for(let k: number = i - 1; k >= 0; k--){
            if(items[k] < items[i]){
                valueToPush = items[k];
                k = -1;
            }
        }
        outputArray.push(valueToPush);
    }
    return outputArray;
}


console.assert(arrayPreviousLess([3, 5, 2, 4, 5]) == [-1, 3, -1, 2, 4], "arrayPreviousLess([3, 5, 2, 4, 5])) should equal [-1, 3, -1, 2, 4]");
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));