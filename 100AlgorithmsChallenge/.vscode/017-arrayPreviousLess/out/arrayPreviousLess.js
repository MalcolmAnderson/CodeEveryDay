function arrayPreviousLess(items) {
    var outputArray = [-1];
    for (var i = 1; i < items.length; i++) {
        for (var k = i - 1; k >= 0; k--) {
            if (items[k] < items[i]) {
                outputArray.push(items[k]);
                k = -1;
            }
        }
        outputArray.push(-1);
    }
    return outputArray;
}
console.assert(arrayPreviousLess([3, 5, 2, 4, 5]) == [-1, 3, -1, 2, 4], "arrayPreviousLess([3, 5, 2, 4, 5])) should equal [-1, 3, -1, 2, 4]");
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
//# sourceMappingURL=arrayPreviousLess.js.map