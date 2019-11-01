function largestOfFour(nums: number[][]): number[] {
    const returnArray: number[] = [];
    for(let thisSet of nums){
        returnArray.push(Math.max(...thisSet))
    }
    return returnArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));