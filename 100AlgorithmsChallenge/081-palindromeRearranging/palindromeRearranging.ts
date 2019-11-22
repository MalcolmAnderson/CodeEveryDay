function palindromeRearranging(inputString: string): boolean {
    const letters: object = {}

    for(let i: number = 0; i < inputString.length; i++){
        const thisLetter = inputString[i].toUpperCase();
        if(letters.hasOwnProperty(thisLetter)){
            letters[thisLetter]++;
        } else {
            letters[thisLetter] = 1;
        }
    }
    let oddCount = 0;
    for(let element in letters){
        if(letters[element] % 2 !== 0){
            oddCount++;
        }
    }
    return oddCount > 1 ? false : true;
}

// function getLetterCodeObject(): object{
//     const letters: object = {}
//     let capANumberCode = 'A'.charCodeAt(0);
//     for(let i: number = 0; i < 26; i++){
//         letters[String.fromCharCode(capANumberCode + i)] = 0;
//     }
//     return letters;
// }

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('daabb'));
console.log(palindromeRearranging('edaabb'));





