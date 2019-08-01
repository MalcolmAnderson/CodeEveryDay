function boxBlur(image) {
    let outVal;
    // 
    //     [[2, 2],
    //     [2, 2]];
    if (!imageIsRectangular(image)) {
        return outVal;
    }
    if (image.length < 3) {
        return outVal;
    }
    for (let i = 1; i < image.length - 1; i++) {
        let outRow = [];
        for (let j = 1; j < image[0].length - 1; j++) {
            outRow.push(getPixelAverage(image, i, j));
        }
        outVal.push(outRow);
    }
    return outVal;
}
function getPixelAverage(image, x, y) {
    let returnValue = 0;
    for (let i = x - 1; i < x + 2; i++) {
        for (let j = y - 1; j < y + 2; j++) {
            returnValue += image[i][j];
        }
    }
    return Math.floor(returnValue / 9);
}
function imageIsRectangular(image) {
    let outVal = true;
    let width = image[0].length;
    for (let i = 0; i < image.length; i++) {
        if (image[i].length !== width) {
            return false;
        }
    }
    return outVal;
}
const sample_bad = [[1, 1, 1],
    [1, 7]];
const sample_1 = [[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]];
const answer_1 = [[1]];
const sample_2 = [
    [1, 1, 1, 2, 3],
    [1, 7, 1, 2, 4],
    [5, 6, 6, 2, 5],
    [1, 5, 1, 2, 5],
    [1, 1, 1, 2, 5]
];
//console.log(getPixelAverage(sample_1, 1, 1));
console.log(boxBlur(sample_1));
// console.assert(boxBlur(sample_1) === answer_1, "boxBlur(sample_1) should equal answer_1", boxBlur(sample_1));
// console.log(imageIsRectangular(sample_bad));
// console.log(imageIsRectangular(sample_1));
//# sourceMappingURL=boxBlur.js.map