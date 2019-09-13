// function assertIsEqual(actual: string, expected: number[]) {
//     let assertString = "";
//     if (typeof (expected) === "string") {
//         assertString = actual + " === \"" + expected + "\"";
//     } else {
//         assertString = actual.toString() + " === " + expected.toString();
//     }
//     console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
// }


function extractEachKth(inputArray:number[], k: number): number[] {
    let returnValue : number[] = [];
    return returnValue;
}

const expected: number[] = [1, 2, 4, 5, 7, 8, 10];

assertIsEqual("extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)", expected);

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));