// using an alternate for loop syntax
function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    const toBeBackedUp: number[] = [];
    for(let change of changes){
        const fileBackupTime = change[0];
        const fileId = change[1];

        const fileNumberAlreadyExists: boolean = toBeBackedUp.includes(fileId);
        const fileWasModifiedAfterLastBackup = fileBackupTime > lastBackupTime
        
        if(!fileNumberAlreadyExists && fileWasModifiedAfterLastBackup){
            toBeBackedUp.push(fileId);
        }
    }
    return toBeBackedUp.sort((a, b) => a - b);
}


function incrementalBackups_mine(lastBackupTime: number, changes: number[][]): number[] {
    const toBeBackedUp: number[] = [];
    for(let i: number = 0; i< changes.length; i++){
        const fileNumberAlreadyExists: boolean = toBeBackedUp.includes(changes[i][1]);
        const fileWasModifiedAfterLastBackup = changes[i][0] > lastBackupTime
        if(!fileNumberAlreadyExists && fileWasModifiedAfterLastBackup){
            toBeBackedUp.push(changes[i][1]);
        }
    }
    return toBeBackedUp.sort((a, b) => a - b);
}


// [1, 3, 5]
console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));
