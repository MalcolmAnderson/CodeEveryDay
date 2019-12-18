function sumAllPrimes(num: number): number {
    var BreakException = {};
    console.time('someFunction');
    if (num < 2) { return 0; }
    //const numbers: number[] = [];
    const primes: number[] = [];
    for (let i: number = 2; i <= num; i++) {
        let isPrime: boolean = true;
        try {
            primes.forEach(prime => {
                if (i % prime === 0) {
                    isPrime = false;
                    throw BreakException;
                }
            })
            if (isPrime) {
                primes.push(i);
            }
        } catch (e) { }
    }
    let total = 0;
    primes.forEach(element => {
        total += element;
    });
    console.timeEnd('someFunction');
    return total;
}

// // 0
// console.log(sumAllPrimes(1));
// // 2
// console.log(sumAllPrimes(2));
// // 5
// console.log(sumAllPrimes(3));
// // 5
// console.log(sumAllPrimes(4));
// // 10
// console.log(sumAllPrimes(5));
// // 10
// console.log(sumAllPrimes(6));
// // 17
// console.log(sumAllPrimes(7));
// // 17
// console.log(sumAllPrimes(8));
// // 17
// console.log(sumAllPrimes(9));
// // 17
// console.log(sumAllPrimes(10));
//                               73156
// console.log(sumAllPrimes(977));
//console.log(sumAllPrimes(99999)); 
//console.log(sumAllPrimes(200000));
//console.log(sumAllPrimes(400000));
//console.log(sumAllPrimes(800000));
console.log(sumAllPrimes(810000));
//console.log(sumAllPrimes(700000));