function sortByLength(inputArray: string[]): string[] {
    const arrayObject: object = {};
    let largestArraySize: number = 0;
    for (let i: number = 0; i < inputArray.length; i++) {
        let currentSize = inputArray[i].length;
        if (currentSize > largestArraySize) {
            largestArraySize = currentSize;
        }
        if (!arrayObject.hasOwnProperty(currentSize)) {
            arrayObject[currentSize] = [];
        }
        arrayObject[currentSize].push(inputArray[i]);
    }
    let outputArray: string[] = [];
    for (let i: number = 0; i <= largestArraySize; i++) {
        if (arrayObject.hasOwnProperty(i)) {
            for (let j: number = 0; j < arrayObject[i].length; j++) {
                outputArray.push(arrayObject[i][j]);
            }
        }
    }
    return outputArray;

}

console.log(sortByLength(["abc",
    "",
    "aaa",
    "a",
    "zz"]));