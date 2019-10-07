function returnArrayContents(candidate: any, holdingBin: any[]): any[]{
    console.log(Array.isArray(candidate));
    if(!Array.isArray(candidate)){
        holdingBin.push(candidate);
        return holdingBin;
    } else {
        for(let i: number = 0; i < candidate.length; i++){
            returnArrayContents(candidate[i], holdingBin);
        }
    }
}

function flattenArray(arr: any[]): any[] {
    let returnValue: any[] = [];
    returnArrayContents(arr, returnValue);
    return returnValue;
}

console.log(flattenArray(["a"]));
console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
