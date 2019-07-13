function areEquallyStrong(lrlr: number[]):boolean{
    let personOne = lrlr[0] + lrlr[1];
    let personTwo = lrlr[2] + lrlr[3];
    return personOne === personTwo;
}

console.log(areEquallyStrong([10,15,15,10]));
console.log(areEquallyStrong([15,10,15,10]));
console.log(areEquallyStrong([10,15,15,9]));

