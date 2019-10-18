function houseOfCats(legs: number): number[] {
    const returnValue: number[] = [];
    let maxCats: number = Math.floor(legs / 4);
    if(legs === 2){
        return [1];
    }
    if(legs % 4 === 0){
        returnValue.push(0);
    } else if (legs % 4 == 2){
        returnValue.push(1)
    }
    returnValue.push(legs / 2);

    return returnValue;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
