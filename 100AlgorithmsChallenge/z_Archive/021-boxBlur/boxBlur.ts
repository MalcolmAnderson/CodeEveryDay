function boxBlur(image: number[][]): number[][] {
    let outVal: number[][] = [];
    // 
    //     [[2, 2],
    //     [2, 2]];

    if (!imageIsRectangular(image)) {
        return outVal;
    }
    if( image.length < 3){
        return outVal;
    }

    for (let i: number = 1; i < image.length -1; i++) {
        let outRow: number[] = [];
        for(let j: number = 1; j < image[0].length - 1; j++){
            outRow.push(getPixelAverage(image, i, j));
        }
        outVal.push(outRow);
    }

    return outVal;
}

function getPixelAverage(image: number[][], x: number, y: number): number{
    let returnValue:number = 0;
    for(let i : number = x - 1; i < x + 2; i++){
        for(let j: number = y - 1; j < y + 2; j++){
            returnValue += image[i][j];
        }
    }
    return Math.floor(returnValue / 9);
}

function imageIsRectangular(image: number[][]): boolean {
    let outVal: boolean = true;
    let width: number = image[0].length;
    for (let i: number = 0; i < image.length; i++) {
        if (image[i].length !== width) {
            return false;
        }
    }
    return outVal;
}

const sample_bad: number[][] =
    [[1, 1, 1],
    [1, 7]];

const sample_1: number[][] =
    [[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]];
const answer_1: number[][] =
    [[1]];

const sample_2: number[][] = [
        [5, 6, 7, 9, 3],
        [3, 7, 6, 7, 4],
        [5, 6, 6, 2, 5],
        [1, 5, 1, 2, 1],
        [1, 1, 1, 2, 2]
    ];
    
console.log(getPixelAverage(sample_1, 1, 1));
console.log(boxBlur(sample_1));
 console.assert(boxBlur(sample_1) === answer_1, "boxBlur(sample_1) should equal answer_1", boxBlur(sample_1));

 console.log(boxBlur(sample_2));


 console.log(imageIsRectangular(sample_bad));
 console.log(imageIsRectangular(sample_1));
