function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    let failedAttempts: number = 0;
    for (let i: number = 0; i < attempts.length; i++) {
        if (attempts[i] === passcode) {
            failedAttempts = 0;
        } else {
            failedAttempts++;
        }
        if (failedAttempts >= 10) {
            return true;
        }
    }
    return false;
}


// true
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));

// false
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "1111", "0000", "6666", "7285", "5555", "1111"]));

// true
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555"]));