function minimalNumberOfCoins(coins: number[], price: number): number {
    let numberOfCoins: number = 0;
    let priceLeft: number = price;
    for (let i: number = coins.length - 1; i >= 0; i--) {
        while (priceLeft >= coins[i]) {
            numberOfCoins++;
            priceLeft -= coins[i];
        }
    }
    return numberOfCoins;
}

// 6
console.log(minimalNumberOfCoins([1, 2, 10], 28));

// 5
console.log(minimalNumberOfCoins([1, 5, 20], 28));