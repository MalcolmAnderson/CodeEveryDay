// Dylan's
function sortByHeight(a: number[]): number[] {
    const array2 = a.filter((element) => {
        if (element != -1) {
            return element;
        }
    }).sort((num1, num2) => num1 - num2);

    let indexVal = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = array2[indexVal]; // indexVal++ here would have saved a line
            indexVal++;
        }
    }
    return a;
}

function sortByHeight_mine(a: number[]): number[] {
    const output: number[] = [];
    const locationOfTrees: number[] = [];
    const heightOfPeople: number[] = [];
    for (let i: number = 0; i < a.length; i++) {
        a[i] === -1 ? locationOfTrees.push(i) : heightOfPeople.push(a[i]);
    }
    heightOfPeople.sort((a, b) => a - b);
    let treesIndex: number = 0;
    let peopleIndex: number = 0;
    for (let i: number = 0; i < a.length; i++) {
        if (locationOfTrees[treesIndex] === i) {
            treesIndex++;
            output.push(-1);
        } else {
            output.push(heightOfPeople[peopleIndex++]);
        }
    }
    return output;
}
//                                                                 [ -1, 150, 160, 170, -1, -1, 180, 190 ]
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));