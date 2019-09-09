function containsDuplicates(a: number[]): boolean {
    a.sort();
    for(let i: number = 1; i < a.length; i++){
        if(a[i] === a[i-1]){
            return true
        }
    }
    return false;
}

let test: number[] = [1, 2, 3, 1]
console.log(test.sort());
test = test.sort();
console.log(test);
console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
