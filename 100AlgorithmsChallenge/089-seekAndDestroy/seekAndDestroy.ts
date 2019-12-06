function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(num => arr2.indexOf(num) === -1);
}

function seekAndDestroy_2(arr1: number[], arr2: number[]): number[] {
    let output: number[] = arr1.filter(num => arr2.indexOf(num) === -1);
    return output;
}

function seekAndDestroy_1(arr1: number[], arr2: number[]): number[] {
    let output: number[] = [];
    for (let i: number = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            output.push(arr1[i]);
        }
    }
    return output;
}


//-   seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]) should return [1]
console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
//-   seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]) should return [1, 5, 1]
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
