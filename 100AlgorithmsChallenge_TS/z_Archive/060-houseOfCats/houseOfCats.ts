// the question is, can there ever be zero people in the house?
// legs > 0 for no, there must be at least 1 human
// legs >= 0 for yes, it is possible that there are only cats

// dylan's solution
function houseOfCats(legs: number): number[] {
    const peopleCount: number[] = [];
    while (legs >= 0){
        peopleCount.unshift(legs / 2);
        legs -= 4 ;
    }
    return peopleCount;
}

function houseOfCats_mine(legs: number): number[] {
    const returnValue: number[] = [];
    let maxCats: number = Math.floor(legs / 4);
    if(legs % 4 === 0){
        returnValue.push(0);
    } else if (legs % 4 == 2){
        returnValue.push(1)
    }
    returnValue.push(legs / 2);

    return returnValue;
}

console.log(houseOfCats(26));
console.log(houseOfCats(24));
console.log(houseOfCats(6));
console.log(houseOfCats(4));
console.log(houseOfCats(2));
