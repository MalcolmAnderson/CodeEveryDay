function boxBlur(image: number[][]): number[][] {

}

console.log(boxBlur(
    [[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]]));

console.log(boxBlur([
    [1, 1, 1, 2, 3],
    [1, 7, 1, 2, 4],
    [5, 6, 6, 2, 5],
    [1, 5, 1, 2, 5],
    [1, 1, 1, 2, 5]]));