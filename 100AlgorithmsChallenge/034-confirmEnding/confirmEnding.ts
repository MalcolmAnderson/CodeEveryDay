function confirmEnding(str: string, target: string) {
    if(target.length > str.length){
        return false;
    }
    return target === str.substr(str.length - target.length);
}

let outstr: string = "thisisatest";
let targ: string = "test";
console.log(outstr.substring(outstr.length - targ.length))

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));