function centuryFromYear(year: number): number {
    let returnValue: number = 0;
    if (year % 100 === 0){
        returnValue = year / 100;
    } else {
        returnValue = (Math.floor(year / 100)+1)
    }
    return returnValue;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));