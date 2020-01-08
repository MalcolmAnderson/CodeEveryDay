function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if (typeof (expected) === "string") {
        assertString = actual + " === \"" + expected + "\"";
    } else {
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}


function companyBotStrategy(trainingData: number[][]): number {
    let correctCount: number = 0;
    let correctTime: number = 0;
    for (let i: number = 0; i < trainingData.length; i++) {
        if (trainingData[i][1] > 0) {
            correctCount++;
            correctTime += trainingData[i][0];
        }
    }
    return correctCount > 0 ? correctTime / correctCount : 0;
}

let test: number[][] = [[3, 1], [6, 1], [4, 1], [5, 1]];
console.log(test[1][1])

assertIsEqual("companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]])", 4.5);
assertIsEqual("companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]])", 5.0);
assertIsEqual("companyBotStrategy([[4, -1], [0, 0], [5, -1]])", 0.0)

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
