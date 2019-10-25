function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    const toBeBackedUp: number[] = [];
    for(let i: number = 0; i< changes.length; i++){
        if(!toBeBackedUp.includes(changes[i][1]) && changes[i][0] > lastBackupTime){
            toBeBackedUp.push(changes[i][1]);
        }
    }
    return toBeBackedUp.sort();
}


// [1, 3, 5]
console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));
