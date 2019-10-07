// dylan's version is functionally the same, but a little cleaner.
// at the same time, I'm not a fan of oneArray being treated as 
// a global rather than passing oneArray into the function and returning it.
function flattenArray(arr: any[]): any[] {
    const oneArray = []
    flatten(arr);

    function flatten(arr: any[]){
        arr.forEach((element) => {
            if (Array.isArray(element)){
                flatten(element);
            } else {
                oneArray.push(element);
            }
        })
    }
    return oneArray;
}


function flattenArray_mine(arr: any[]): any[] {
    function returnArrayContents(candidate: any, holdingBin: any[]): any[]{
    
        if(!Array.isArray(candidate)){
            holdingBin.push(candidate);
            return holdingBin;
        } else {
            for(let i: number = 0; i < candidate.length; i++){
                returnArrayContents(candidate[i], holdingBin);
            }
        }
    }

    let returnValue: any[] = [];
    returnArrayContents(arr, returnValue);
    return returnValue;
}

console.log(flattenArray(["a"]));
console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
