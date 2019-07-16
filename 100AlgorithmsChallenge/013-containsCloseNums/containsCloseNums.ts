function containsCloseNums(inputArray: number[], rangeOrLess: number): boolean {
    for(let i: number = 0; i < inputArray.length - 1; i++){
        for(let j: number = i+1; j < inputArray.length; j++){
            // console.log(j-i);
            // console.log(inputArray[i].toString() === inputArray[j].toString());
            if(j-i <= rangeOrLess){
                if(inputArray[i].toString() === inputArray[j].toString()){
                    return true;
                }
            }
            else{
                j = inputArray.length;
            }
        }
    }
    return false;
}








console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
console.assert(containsCloseNums([0, 1, 2, 3, 5, 2], 3), "([0, 1, 2, 3, 5, 2], 3)) should return true");
console.assert(!containsCloseNums([0, 1, 2, 3, 5, 2], 2), "([0, 1, 2, 3, 5, 2], 2)) should return false");

