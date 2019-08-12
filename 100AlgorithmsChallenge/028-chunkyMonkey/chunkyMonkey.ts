function chunkyMonkey(arr: any[], size: number): any[][] {
    return arr;
}

console.assert(
    chunkyMonkey(["a", "b", "c", "d"], 2) === [["a", "b"], ["c", "d"]]
    , "chunkyMonkey([\"a\", \"b\", \"c\", \"d\"], 2) should equal [[\"a\", \"b\"], [\"c\", \"d\"]] but is:"
    , chunkyMonkey(["a", "b", "c", "d"], 2) 
    );
console.assert(
    chunkyMonkey([0, 1, 2, 3, 4, 5], 4) === [["a", "b"], ["c", "d"]]
    , "chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should equal [[0, 1], [2, 3], [4], [5]] but is:"
    , chunkyMonkey([0, 1, 2, 3, 4, 5], 4) 
    );


console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));