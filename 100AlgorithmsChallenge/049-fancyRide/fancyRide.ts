function fancyRide(l: number, fares: number[]): string {
    let rides = {
        0 : "UberX",
        1 : "UberXL",
        2 : "UberPlus",
        3 : "UberBlack",
        4 : "UberSUV",
    }   
    const cashOnHand: number = 20;
    // throw exception if fares.length > 4
    for(let i: number = fares.length ; i >= 0; i--){
        if(fares[i] * l <= cashOnHand){
            return rides[i];
        }
    }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));