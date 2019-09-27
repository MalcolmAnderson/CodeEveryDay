// Dylan's solution
function fermactor(n: number): number[] {
    for (let i: number = 1; i < Math.pow(n, 2); i++) {
        for (let j: number = 0; j < i; j++) {
            const total = i ** 2 - j ** 2;
            if (total === n) {
                return [i, j];
            }
        }
    }
}

function fermactor_mine(n: number): number[] {
    const retVal: number[] = [];
    for (let i: number = 1; i < Math.pow(n, 2); i++) {
        while (Math.pow(i, 2) < n) {
            i++;
        }
        let candidate: number = 0;
        for (let j: number = 0; j < Math.pow(n, 2); j++) {
            candidate = Math.pow(i, 2) - Math.pow(j, 2);
            console.log(i.toString() + " - " + j.toString() + " = " + candidate.toString())
            if (candidate === n) {
                retVal.push(i);
                retVal.push(j);
                return retVal;
            } else if (candidate < 0) {
                console.log(candidate);
                break;
            }
        }
    }
    return retVal;
}


console.log(fermactor(13));