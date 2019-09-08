function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if (typeof (expected) === "string") {
        assertString = actual + " === \"" + expected + "\"";
    } else {
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}



function electionsWinners(votes: number[], k: number): number {
    let possibleWinners = votes.length;
    let highestVoteTotal = Math.max(...votes);
    //let sortedVotes = votes.sort(function (a, b) { return a - b });
    for(let i: number = 0; i < votes.length; i++){
        if ( (votes[i] + k) <= highestVoteTotal){
            possibleWinners--;
        }
    }
    return possibleWinners;
}

let points = [3, 5, 1, 2];
points.sort(function (a, b) { return a - b });
console.log(points);


assertIsEqual("electionsWinners([2, 3, 5, 2], 3)", 2);

console.log(electionsWinners([2, 3, 5, 2], 3));