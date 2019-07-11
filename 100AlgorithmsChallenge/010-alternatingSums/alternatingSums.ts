function alternatingSums(weights: number[]): number[] {
    let returnValue: number[] = [];
    let groupOneTotal = 0;
    let groupTwoTotal = 0;
    for (let i: number = 0; i < weights.length; i++) {
        if ((i + 1) % 2 > 0) {
            console.log(weights[i])
            groupOneTotal += weights[i];
        }
        else {
            groupTwoTotal += weights[i];
        }
    }
    returnValue.push(groupOneTotal);
    returnValue.push(groupTwoTotal);
    return returnValue;
}

console.log(1 % 2)


console.log(alternatingSums([50, 60, 60, 45, 70]));