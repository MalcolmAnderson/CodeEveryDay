function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    const belowThreshold: number[] = [];
    for(let i: number = 0; i < ratings.length; i++){
        let sum: number = 0;
        for(let j: number = 0; j < ratings[i].length; j++){
            sum += ratings[i][j];
        }
        if(sum / ratings[i].length < threshold){
            belowThreshold.push(i);
        }
    }
    return belowThreshold;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));