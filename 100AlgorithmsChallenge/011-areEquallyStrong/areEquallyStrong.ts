function areEquallyStrong(YourLeft: number, YourRight: number, TheirLeft: number, TheirRight: number): boolean {
    let YourStrongest: number = YourLeft >= YourRight ? YourLeft : YourRight;
    let YourWeakest: number = YourLeft <= YourRight ? YourLeft : YourRight;
    let TheirStrongest: number = TheirLeft >= TheirRight ? TheirLeft : TheirRight;
    let TheirWeakest: number = TheirLeft <= TheirRight ? TheirLeft : TheirRight;
    //return false;
    return (YourStrongest === TheirStrongest) && (YourWeakest === TheirWeakest);
}

// trues
console.assert(areEquallyStrong(10, 15, 15, 10), "10, 15, 15, 10 should be true");
console.assert(areEquallyStrong(15, 10, 15, 10), "15, 10, 15, 10 should be true");
// falses
console.assert(!areEquallyStrong(10, 15, 15, 9), "10, 15, 15, 9, should be false");
console.assert(!areEquallyStrong(10, 14, 15, 9), "10, 14, 15, 9, should be false");



function areEquallyStrong_Version_Wrong(lrlr: number[]): boolean {
    let personOne = lrlr[0] + lrlr[1];
    let personTwo = lrlr[2] + lrlr[3];
    return personOne === personTwo;
}

console.log(areEquallyStrong_Version_Wrong([10, 15, 15, 10]));
console.log(areEquallyStrong_Version_Wrong([15, 10, 15, 10]));
console.log(areEquallyStrong_Version_Wrong([10, 15, 15, 9]));
