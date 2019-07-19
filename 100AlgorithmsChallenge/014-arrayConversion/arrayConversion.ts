function arrayConversion(myArray: number[]): number {


    let returnValue: number = 0;
    return returnValue;
}



function getSum(value1: number, value2: number): number{
    return value1 + value2
}
function getProduct(value1: number, value2: number): number{
    return value1 * value2
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.assert(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])===186, "arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) should return 186");

console.log(arrayConversion([7, 8, 2]));
console.assert(arrayConversion([7, 8, 2])===30, "arrayConversion([7, 8, 2]) should return 30");
