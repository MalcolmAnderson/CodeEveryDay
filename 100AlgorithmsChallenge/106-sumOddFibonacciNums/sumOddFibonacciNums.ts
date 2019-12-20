function sumOddFibonacciNums(num: number): number {
    if (num < 1) { return 0; }
    if (num === 1) { return 1; }
    const FibSequence: number[] = [1, 1];
    // build FibSequence
    let last: number = 1
    let current: number = 2
    while (current <= num) {
        FibSequence.push(current);
        const total: number = last + current;
        last = current;
        current = total;
    }
    // sum the odd numbers
    let total: number = 0;
    FibSequence.forEach(element => {
        total += element % 2 === 0 ? 0 : element;
    });
    return total;
}


//                                     10
console.log(sumOddFibonacciNums(10));
//                                       1785
console.log(sumOddFibonacciNums(1000));
//                                          4613732
console.log(sumOddFibonacciNums(4000000));
