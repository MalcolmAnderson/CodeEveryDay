function maxMultiple(divisor: number, bound: number): number  {
    let largestMultiple: number = Math.floor(bound / divisor);
    return divisor * largestMultiple;
}

console.log(maxMultiple(3,10));