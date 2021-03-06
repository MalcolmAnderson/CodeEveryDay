function mostFrequentDigitSum(n: number): number {
    const stepDigits: number[] = [];
    while (n > 0) {
        const step: number = getStepFromNumber(n);
        stepDigits.push(step);
        n -= step;
    }
    const stepBag: object = {};
    for(let i: number = 0; i < stepDigits.length; i++){
        if(stepBag.hasOwnProperty(stepDigits[i])){
            stepBag[stepDigits[i]]++;
        } else {
            stepBag[stepDigits[i]] = 1;
        }
    }
    let mostFrequentDigit: number = 0;
    console.log(stepBag)
    for(let element in stepBag){
        console.log(stepBag[element]);
        if(stepBag[element] > mostFrequentDigit){
            mostFrequentDigit = stepBag[element];
        }
    }
    return mostFrequentDigit;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));

function getMode(arr: number[]): number {
    return 0;
}

function getStepFromNumber(n: number): number {
    const digitArray: number[] = getDigitArrayFromNumber(n);
    let total: number = 0;
    for (let i: number = 0; i < digitArray.length; i++) {
        total += digitArray[i];
    }
    return total;
}

function getDigitArrayFromNumber(n: number): number[] {
    const stringArray: string[] = n.toString().split('');
    const digitArray: number[] = []
    for (let i: number = 0; i < stringArray.length; i++) {
        digitArray.push(parseInt(stringArray[i]));
    }
    return digitArray;
}
