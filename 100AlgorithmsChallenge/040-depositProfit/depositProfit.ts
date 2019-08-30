// new version
function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if(typeof(expected)==="string"){
        assertString = actual + " === \"" + expected +"\"";
    }else{
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}

function depositProfit(deposit: number, rate: number, threshold: number): number {
    let year: number = 0;
    while(deposit < threshold){
        deposit += deposit * rate / 100;
        year++
    }
    return year;
}

console.log(depositProfit(100, 20, 170))
assertIsEqual("depositProfit(100, 20, 170)", 3);