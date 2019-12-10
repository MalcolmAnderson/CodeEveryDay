// dylan's version.  Just a little cleaner
function maxMultiple(divisor: number, bound: number): number  {
    let remainder: number = bound % divisor;
    return bound - remainder;
}

function maxMultiple_mine(divisor: number, bound: number): number  {
    let largestMultiple: number = Math.floor(bound / divisor);
    return divisor * largestMultiple;
}

console.log(maxMultiple(3,10));