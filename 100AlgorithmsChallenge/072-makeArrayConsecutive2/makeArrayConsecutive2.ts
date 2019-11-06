function makeArrayConsecutive2(statues: number[]): number {
    statues = statues.sort((a,b)=> a-b);
    console.log(statues);
    let numberOfNewStatues: number = 0;
    let curretNumber: number = statues[0];
    for(let i: number = 1; i < statues.length; i++){
        numberOfNewStatues += statues[i] - curretNumber - 1;
        curretNumber = statues[i];
    }
    return numberOfNewStatues;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([8]));
console.log(makeArrayConsecutive2([2, 3]));
console.log(makeArrayConsecutive2([2, 4]));
console.log(makeArrayConsecutive2([6, 3]));
console.log(makeArrayConsecutive2([16, 3]));

// add comment
// add comment
