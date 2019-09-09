function createSegment(startNum: number, endNum: number): string {
    let segment: string = "";
    if (endNum > startNum) {
        segment = startNum.toString() + "->" + endNum.toString();
    } else {
        segment = startNum.toString();
    }
    return segment;
}


function composeRanges(nums: number[]): string[] {
    let returnValue: string[] = [];
    let startNum: number = nums[0];
    let endNum: number = startNum;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] === endNum + 1) {
            endNum++;
        } else {
            returnValue.push(createSegment(startNum, endNum));
            startNum = nums[i];
            endNum = startNum;
        }
    }
    returnValue.push(createSegment(startNum, endNum));
    return returnValue;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));