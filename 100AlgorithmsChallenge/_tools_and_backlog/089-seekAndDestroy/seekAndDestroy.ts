// Nazareth's solution to Dylan's object solution
// TODO create an initialArray with 10,000 elements and do time trials for each method
function seekAndDestroy(initialArray: number[], itemsToBeRemoved: number[]): number[] {

    let results: number[] = [], obj = {};

    for (let i = 0; i < itemsToBeRemoved.length; i++) {
        obj[itemsToBeRemoved[i]] = i;
    }

    for (let i = 0; i < initialArray.length; i++) {
        if (!obj.hasOwnProperty(initialArray[i])) {
            results.push(initialArray[i]);
        }
    }

    return results;
}

// Dylan's filter solution
function seekAndDestroy_DylansFilterSolution(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(element => !arr2.includes(element));
}

function seekAndDestroy_myFilterSolution(arr1: number[], arr2: number[]): number[] {
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
