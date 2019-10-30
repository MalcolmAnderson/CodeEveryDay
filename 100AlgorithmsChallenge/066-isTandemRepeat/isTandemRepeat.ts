function isTandemRepeat(inputString: string): boolean {
    if(inputString.length % 2 !== 0){
        return false
    }
    const firstHalf = inputString.substring(0, inputString.length / 2);
    return firstHalf.concat(firstHalf) === inputString;
}


// true
console.log(isTandemRepeat('tandemtandem'))

// false
console.log(isTandemRepeat('qqq'))

// true
console.log(isTandemRepeat('qqqq'))

// true
console.log(isTandemRepeat('2ww2ww'))

// false
console.log(isTandemRepeat('2w2ww'))
