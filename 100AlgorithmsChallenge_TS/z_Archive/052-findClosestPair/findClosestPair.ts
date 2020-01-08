function findClosestPair(numbers: number[], sum: number): number {
   let lowestMatch: number = -1
    for(let i: number = 0; i < numbers.length - 1; i++){
        for(let j: number = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === sum){
                if(lowestMatch < 0){
                    lowestMatch = j - i;
                } else if (j-i < lowestMatch) {
                    lowestMatch = j - i;
                }
            }
        }
   }
   return lowestMatch;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5)); // 2
console.log(findClosestPair([2, 3, 7], 8)); // -1