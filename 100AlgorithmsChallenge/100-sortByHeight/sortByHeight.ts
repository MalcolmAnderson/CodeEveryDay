function sortByHeight(a: number[]): number[] {
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