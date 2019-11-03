// dylan's
function firstDuplicate(a: number[]): number {
    const firstDup = {};
    for(let num of a){
        if(firstDup.hasOwnProperty(num)){
            return num;
        }
        firstDup[num] = num;
    }
    return -1;
}

function firstDuplicate_mine(a: number[]): number {
    let lowestDuplicate: number = -1;
    for(let i: number = 0; i < a.length - 1; i++){
        for(let j: number = i+1; j < a.length; j++){
            if (a[i] === a[j]){
                if(lowestDuplicate < 0){
                    lowestDuplicate = a[j];
                } else if(j < lowestDuplicate) {
                    lowestDuplicate = a[j];
                }
            }
        }
    }
    return lowestDuplicate;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
