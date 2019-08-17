function candies(n: number, m: number): number {
    return Math.floor(m/n) * n;
}

console.log(candies(3, 10));
console.log(candies(5, 32));