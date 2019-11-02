function lateRide(n: number): number {
    // minutes to hour:minutes time
    const hours: number = Math.floor(n / 60);
    const minutes: number = n - hours * 60;
    const time: string = hours.toString() + minutes.toString();
    return reduceThis(time);
}

function reduceThis(numArray: string): number {
    if (numArray.length === 1) {
        return parseInt(numArray);
    }
    let total: number = 0;
    for (let i: number = 0; i < numArray.length; i++) {
        total += parseInt(numArray[i]);
    }
    return reduceThis(total.toString());
}

// 5
console.log(reduceThis("5006"))

console.log(lateRide(240));
console.log(lateRide(808));
