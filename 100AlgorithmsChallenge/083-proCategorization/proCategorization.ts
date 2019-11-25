
// Dylan's
function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    let prosPreferences = {};
    let proPrefs = [];

    for(let i = 0; i < pros.length; i++){
        for(let j = 0; j <preferences[i].length; j++){
            if(prosPreferences.hasOwnProperty(preferences[i][j])){
                prosPreferences[preferences[i][j]].push(pros[i]);
            } else {
                prosPreferences[preferences[i][j]] = [pros[i]];
            }
        }
    }

    for(const prop in prosPreferences){
        proPrefs.push([[prop], [...prosPreferences[prop]]]);
    }

    proPrefs = proPrefs.sort((pref1, pref2) => {
        const pref1Lower = pref1[0][0].toLowerCase();
        const pref2Lower = pref2[0][0].toLowerCase();

        if(pref1Lower > pref2Lower){ return 1;}
        if(pref1Lower < pref2Lower){ return -1;}
        return 0;
    });

    return proPrefs;
}


function proCategorization_mine(pros: string[], preferences: string[][]): string[][][] {
    const skills: object = populateSkillsObject(pros, preferences);
    //console.log(skills);

    const orderdSkillList: string[] = [];
    for (let subSkill in skills) {
        orderdSkillList.push(subSkill);
    }
    orderdSkillList.sort();

    const outputArray: string[][][] = add_CollectionOfSkills_With_ListOfProfessionalWithThatSkill_ToOutputArray(skills, orderdSkillList);
    return outputArray;
}

function add_CollectionOfSkills_With_ListOfProfessionalWithThatSkill_ToOutputArray(skills, orderdSkillList): string[][][]{
    const outputArray: string[][][] = [];
    for (let skillAsNumber: number = 0; skillAsNumber < orderdSkillList.length; skillAsNumber++) {
        const outputRow: string[][] = [];
        
        const thisSkill: string[] = [];
        thisSkill.push(orderdSkillList[skillAsNumber]);
        outputRow.push(thisSkill);

        const professionalsWithThisSkill = skills[orderdSkillList[skillAsNumber]]
        outputRow.push(professionalsWithThisSkill);
        
        outputArray.push(outputRow);
    }
    return outputArray;
}


function populateSkillsObject(pros: string[], preferences: string[][]): object {
    const skills: object = {};
    for (let pro: number = 0; pro < pros.length; pro++) {
        //console.log(preferences[pro].length)
        for (let job: number = 0; job < preferences[pro].length; job++) {
            //console.log(skills);
            //console.log(preferences[pro][job]);
            if (skills.hasOwnProperty(preferences[pro][job])) {
                skills[preferences[pro][job]].push(pros[pro]);
            } else {
                skills[preferences[pro][job]] = [pros[pro]];
                //console.log(skills[preferences[pro][job]])
            }
        }
    }
    //console.log(skills);
    return skills;
}


// [ [ [ "Computer repair" ], [ "Jack" ] ] ];
console.log(proCategorization(["Jack"], [["Computer repair"]]));

console.log(proCategorization(["Jack", "Leon"], [["Computer repair"], ["Computer lessons"]]));

// [ 
//    [ 
//      [ "Computer repair" ], [ "Jack" ] 
//      [ "Handyman" ], [ "Jack" ] 
//      [ "House cleaning" ], [ "Jack" ] 
//    ] 
// ];
// console.log(proCategorization(["Jack"], [["Handyman", "House cleaning"]]));

console.log(proCategorization(["Jack"], [["Computer repair", "Handyman", "House cleaning"]]));


// For pros = ["Jack", "Leon", "Maria"] and

// preferences = [["Computer repair", "Handyman", "House cleaning"],
//                ["Computer lessons", "Computer repair", "Data recovery service"],
//                ["Computer lessons", "House cleaning"]]

//                the output should be

// proCategorization(pros, preferences) = [[["Computer lessons"], ["Leon", "Maria"]],
//                                         [["Computer repair"], ["Jack", "Leon"]],
//                                         [["Data recovery service"], ["Leon"]],
//                                         [["Handyman"], ["Jack"]],
//                                         [["House cleaning"], ["Jack", "Maria"]]]






console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));
