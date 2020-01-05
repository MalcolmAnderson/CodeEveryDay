function validTime(time: string): boolean {
    const hours: number = parseInt(time.substr(0, 2));
    const minutes: number = parseInt(time.substr(time.length - 2, 2));
    //console.log(time.substr(time.length - 3, 2))
    return hours < 25 && minutes < 61;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));