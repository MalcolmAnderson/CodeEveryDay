function alternatingSums(weights: number[]): number[] {
    let returnValue: number[] = [];
    let groupOneTotal = 0;
    let groupTwoTotal = 0;
    for (let i: number = 0; i < weights.length; i++) {
        if ((i + 1) % 2 > 0) {
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

console.log(alternatingSums([50, 60, 60, 45, 70]));

// Document Dylan's use (mostly for the use of index in forEach)
function alternatingSums2(weights: number[]): number[] {
    let returnValue: number[] = [];
    let groupOneTotal = 0;
    let groupTwoTotal = 0;
    weights.forEach((element, index)=>{
        if(index % 2 === 0){
            groupOneTotal += element;
        } else {
            groupTwoTotal += element;
        }
    })
    return [groupOneTotal, groupTwoTotal];
}
