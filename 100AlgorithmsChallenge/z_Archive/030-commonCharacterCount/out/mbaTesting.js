// Note, Quokka doesn't support imports, so these functions are copied into main as needed.
// new version
// function assertIsEqualToString(actual: string, expected: any) {
//     let assertString = "";
//     if(typeof(expected)==="string"){
//         assertString = actual + " === \"" + expected +"\"";
//     }else{
//         assertString = actual + " === " + expected;
//     }
//     console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
// }
// old version
// export function assertIsEqual(actual: string, expected: any) {
//     let assertString: string = actual + " === " + expected;
//     console.assert(eval(assertString), (actual + " should equal " + expected + " but is"), eval(actual));
// }
// export function assertIsTrue(actual: string) {
//     console.assert(eval(actual), (actual + " should be true but is"), eval(actual));
// }
// export function assertIsFalse(actual: string) {
//     console.assert(!eval(actual), (actual + " should be false but is"), eval(actual));
// }
//# sourceMappingURL=mbaTesting.js.map