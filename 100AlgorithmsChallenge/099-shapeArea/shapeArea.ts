function shapeArea(n: number): number {
    let baseline = n * 2 - 1;
    let currentLine: number = baseline - 2;
    let areaAboveBaseLine: number = 0;
    while (currentLine > 0) {
        areaAboveBaseLine += currentLine;
        currentLine -= 2;
    }
    return baseline + areaAboveBaseLine * 2;
}

function hollowShapeArea(n: number): number {
    if (n === 1) { return 1; }
    if (n < 1) { return 0; }
    return shapeArea(n) - shapeArea(n - 1);
}

function hollowPyramidBlocksRequired(n: number): number {
    console.log(n);
    if (n === 1) { return 1; }
    if (n < 1) { return 0; }
    let totalBlocks: number = 0;
    for (let i: number = n; i > 0; i--) {
        console.log(i);
        totalBlocks += hollowShapeArea(i);
    }
    return totalBlocks;
}

console.log(hollowPyramidBlocksRequired(1));
console.log(hollowPyramidBlocksRequired(2));
console.log(hollowPyramidBlocksRequired(3));
console.log(hollowPyramidBlocksRequired(4));
console.log(hollowPyramidBlocksRequired(5));

console.log(hollowShapeArea(1));
console.log(hollowShapeArea(2));
console.log(hollowShapeArea(3));
console.log(hollowShapeArea(4));

console.log(shapeArea(1));  //  1
console.log(shapeArea(2));  //  5
console.log(shapeArea(3));  // 13
console.log(shapeArea(4));  // 25
console.log(shapeArea(5));
console.log(shapeArea(6));
console.log(shapeArea(7));
console.log(shapeArea(8));

