function assertIsEqual(actual: string, expected: any) {
    let assertString = "";
    if(typeof(expected)==="string"){
        assertString = actual + " === \"" + expected +"\"";
    }else{
        assertString = actual + " === " + expected;
    }
    console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
}

function commonCharacters(s1: string, s2: string): string {
    return "";
 }

function commonCharacterCount(s1: string, s2: string): number {
   return -1;
}

assertIsEqual("commonCharacters('aabcc', 'adcaa')", "aac");
assertIsEqual("commonCharacterCount('aabcc', 'adcaa')", 3);

console.log(commonCharacterCount('aabcc', 'adcaa'));