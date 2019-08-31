function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if(typeof(expected)==="string"){
        assertString = actual + " === \"" + expected +"\"";
    }else{
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}

function differentSymbolsNaive(s: string): number {
    let bag:string[] = [];
    for(let i: number = 0; i < s.length; i++){
        if(!bag.includes(s[i])){
            bag.push(s[i]);
        }
    }
    return bag.length;
}

assertIsEqual("differentSymbolsNaive('cabca')", 3);

console.log(differentSymbolsNaive('cabca'));
