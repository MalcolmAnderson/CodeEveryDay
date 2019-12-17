
// dylan's first function is effectively the same as mine
function getAlphabetCount(word: string): object {
    const chars = word.split('');
    const alphabetCount: object = {};
    chars.forEach((char) => {
        if (alphabetCount.hasOwnProperty(char)) {
            alphabetCount[char]++;
        } else {
            alphabetCount[char] = 1;
        }
    });
    return alphabetCount;
}


function buildCountedLetterBagFromString(b: string): object {
    const bag: object = {};
    for (let i: number = 0; i < b.length; i++) {
        if (!bag.hasOwnProperty(b[i])) {
            bag[b[i]] = 1;
        } else {
            bag[b[i]]++;
        }
    }
    return bag;
}

function countStringsFromCountedLetterBag(bag: object, a: string): number {
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

function stringsConstruction_mine(a: string, b: string): number {
    const bag: object = buildCountedLetterBagFromString(b);
    let count: number = countStringsFromCountedLetterBag(bag, a);
    return count;
}
function countNumberOfAsFromBViaCounts(aCount: object, bCount: object) {
    const counts: number[] = [];
    for (let char in aCount) {
        if (bCount.hasOwnProperty(char)) {
            counts.push(Math.floor(bCount[char] / aCount[char]));
        } else {
            return 0;
        }
    }
    let count: number = Math.min(...counts);
    return count;
}

// dylan's approch is a bit different
// this is my refactoring of dylan's approach
function stringsConstruction(a: string, b: string): number {
    const aCount: object = getAlphabetCount(a);
    const bCount: object = getAlphabetCount(b);
    let count: number = countNumberOfAsFromBViaCounts(aCount, bCount);
    return count;
}

console.log(stringsConstruction('abc', 'abccba'));
console.log(stringsConstruction('abbc', 'abccbabb'));
console.log(stringsConstruction('ab', 'abbaab'));
console.log(stringsConstruction('a', 'aaaaaaa'));
