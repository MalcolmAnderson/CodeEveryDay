
// "..." is called the rest operator

function add(...myValues: number[]): number{
    let total = 0;

    //for(var i=0; i<myValues.length; i++){
    //    total += arguments[i];
    //}

    myValues.forEach((item) => {
        total += item;
    })
    
    return total;
}

console.log(add(2, 4));
console.log(add(2, 4, 6, 8, 10));
