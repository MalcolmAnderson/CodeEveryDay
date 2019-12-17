function stringsConstruction(a: string, b: string): number {
    const bag: object = {};
    for (let i: number = 0; i < b.length; i++) {
        if (!bag.hasOwnProperty(b[i])) {
            bag[b[i]] = 1;
        } else {
            bag[b[i]]++;
        }
    }
    let continueLoop: Boolean = true;
    let count: number = 0;
    while (continueLoop) {
        for (let i: number = 0; i < a.length; i++) {
            if (bag.hasOwnProperty(a[i]) && bag[a[i]] > 0) {
                bag[a[i]]--;
            } else {
                continueLoop = false;
            }
        }
        if (continueLoop) {
            count++;
        }
    }
    return count;
}

console.log(stringsConstruction('abc', 'abccba'));
console.log(stringsConstruction('ab', 'abbaab'));
console.log(stringsConstruction('a', 'aaaaaaa'));
