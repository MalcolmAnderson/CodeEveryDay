function convertString(s: string, t: string): boolean {
    let returnValue: boolean = false;
    let currentPositionInT: number = 0;
    for(let i: number = 0; i < s.length; i++){
        if(s[i]===t[currentPositionInT]){
            currentPositionInT++;
        }
        if(currentPositionInT === t.length){
            returnValue = true;
            break;
        }
    }
    return returnValue;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
