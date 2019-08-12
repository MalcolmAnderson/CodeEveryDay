function chunkyMonkey(arr: any[], size: number): any[][] {
    let buckets: any[] = [];
    let minimumCount = Math.floor(arr.length / size);
    let remainder = arr.length % size;
    let currentElement: number = 0;
    for (let i: number = 0; i < size; i++) {
        let segment: any[] = [];
        for (let j: number = 0; j < minimumCount; j++) {
            segment.push(arr[currentElement++]);
        }
        if (remainder-- > 0) {
            segment.push(arr[currentElement++]);
        }
        buckets.push(segment);
    }
    return buckets;
}

console.assert(
    JSON.stringify(chunkyMonkey(['a', 'b', 'c', 'd'], 2)) === JSON.stringify( [ [ 'a', 'b' ], [ 'c', 'd' ] ])
    , "chunkyMonkey( [\'a\', \'b\', \'c\', \'d\' ], 2) should equal [ [ \'a\', \'b\' ], [ \'c\', \'d\' ] ] but is:"
    , chunkyMonkey(["a", "b", "c", "d"], 2)
);
console.assert(
    JSON.stringify(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)) === JSON.stringify( [[0,1],[2,3],[4],[5]])
    , "chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should equal [[0, 1], [2, 3], [4], [5]] but is:"
    , chunkyMonkey([0, 1, 2, 3, 4, 5], 4)
);


console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
