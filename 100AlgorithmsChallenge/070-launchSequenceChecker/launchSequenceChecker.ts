function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
    const launchCodes: Object = {};

    for(let i: number = 0; i < systemNames.length; i++){
        if(launchCodes.hasOwnProperty(systemNames[i])){
            if(launchCodes[systemNames[i]] >= stepNumbers[i]){
                return false;
            } 
            launchCodes[systemNames[i]] = stepNumbers[i];
        } else {
            launchCodes[systemNames[i]] = stepNumbers[i];
        }
    }
    return true;
}

function launchSequenceChecker_mine(systemNames: string[], stepNumbers: number[]): boolean {
    const systems: Object = new Object();
    for(let i: number = 0; i < systemNames.length; i++){
        if(!systems.hasOwnProperty(systemNames[i])){
            systems[systemNames[i]] = [];
        }
        systems[systemNames[i]].push(stepNumbers[i]);
    }
    for (var prop in systems){
        if (Object.prototype.hasOwnProperty.call(systems, prop)){
            let arrayLength: number = systems[prop].length;
            if (arrayLength > 1){
                let currentValue = systems[prop][0];
                for(let i: number = 1; i < arrayLength; i++){
                    if(systems[prop][i] < currentValue){
                        return false;
                    } else {
                        currentValue = systems[prop[i]];
                    }
                }
            }
            console.log(systems[prop])
        }
    }
    console.log(systems);
    return true;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));