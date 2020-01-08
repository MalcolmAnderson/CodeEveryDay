// function assertIsEqual(actual: string, expected: number[]) {
//     let assertString = "";
//     if (typeof (expected) === "string") {
//         assertString = actual + " === \"" + expected + "\"";
//     } else {
//         assertString = actual.toString() + " === " + expected.toString();
//     }
//     console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
// }


// dylan's version
function extractEachKth(inputArray: number[], k: number): number[] {
    return inputArray.filter((element, index) => (index + 1) % k !== 0);
}

function extractEachKth_mine(inputArray: number[], k: number): number[] {
    let returnValue: number[] = [];
    returnValue.push(inputArray[0]);
    for (let i: number = 1; i < inputArray.length; i++) {
        if (!((i + 1) % k === 0)) {
            returnValue.push(inputArray[i]);
        }
    }
    return returnValue;
}


const expected: number[] = [1, 2, 4, 5, 7, 8, 10];

//assertIsEqual("extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)", expected);

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));