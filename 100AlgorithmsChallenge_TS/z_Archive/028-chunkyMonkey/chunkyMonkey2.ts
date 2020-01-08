function chunkyMonkey2(arr: any[], size: number): any[][] {
    let buckets: any[] = [];
    let count: number = 0;
    while (count < arr.length){
        buckets.push(arr.slice(count, count+= size));
    }
    return buckets;
}

console.assert(
    JSON.stringify(chunkyMonkey2(['a', 'b', 'c', 'd'], 2)) === JSON.stringify([['a', 'b'], ['c', 'd']])
    , "chunkyMonkey2( [\'a\', \'b\', \'c\', \'d\' ], 2) should equal [ [ \'a\', \'b\' ], [ \'c\', \'d\' ] ] but is:"
    , chunkyMonkey2(["a", "b", "c", "d"], 2)
);
console.assert(
    JSON.stringify(chunkyMonkey2([0, 1, 2, 3, 4, 5], 4)) === JSON.stringify([[0, 1, 2, 3], [4, 5]])
    , "chunkyMonkey2([0, 1, 2, 3, 4, 5], 4) should equal [[0, 1], [2, 3], [4], [5]] but is:"
    , chunkyMonkey2([0, 1, 2, 3, 4, 5], 4)
);


console.log(chunkyMonkey2(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey2([0, 1, 2, 3, 4, 5], 4));
