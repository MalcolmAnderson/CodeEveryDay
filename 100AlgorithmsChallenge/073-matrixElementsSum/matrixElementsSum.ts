function matrixElementsSum(matrix: any[][]): number {
    const validRoom: number[] = [];
    let totalCost: number = 0;
    for(let i: number = 0; i < matrix[0].length; i++){
        validRoom.push(1);
    }
    // console.log(validRoom);
    for(let floor: number = 0; floor < matrix.length; floor++){
        for(let room: number = 0; room < matrix[floor].length; room++){
            // console.log(validRoom);
            if(validRoom[room] === 1){
                if(matrix[floor][room] === 0){
                    validRoom[room] = 0; // disable room
                } else {
                    totalCost += matrix[floor][room];
                }
            }
        }
    }
    return totalCost;
}

console.log(matrixElementsSum(
    [[2, 0, 3, 3]]
));

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));


// matrix = 

//          [[0, 1, 1, 2],
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.

// Here's the rooms matrix with unsuitable rooms marked with 'x':

//        [[x, 1, 1, 2], 
//         [x, 5, x, x], 
//         [x, x, x, x]]
// Thus, the answer is 1 + 5 + 1 + 2 = 9.

