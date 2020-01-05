function switchLights(a: number[]): number[] {
    const stringArray: string[] = a.toString().split(',');
    for (let i: number = 0; i < a.length; i++) {
        if (a[i] === 1) {
            flipAllBitsUpToX(stringArray, i);
        }
    }
    const outputArray: number[] = [];
    stringArray.forEach(element => {
        outputArray.push(parseInt(element));
    });
    return outputArray;
}
function flipAllBitsUpToX(sA: string[], x: number): string[] {
    for (let i: number = 0; i <= x; i++) {
        if (sA[i] === "1") {
            sA[i] = "0";
        } else {
            sA[i] = "1";
        }
    }
    return sA;
}

//                                  [ 0, 0 ]
console.log(switchLights([0, 0]));
//                                           [ 0, 1, 0, 1, 0 ]
console.log(switchLights([1, 1, 1, 1, 1]));
//                                           [ 0, 1, 1, 0, 0 ]
console.log(switchLights([0, 1, 0, 1, 0]));
