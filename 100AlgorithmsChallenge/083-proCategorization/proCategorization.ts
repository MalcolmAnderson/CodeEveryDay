function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    const skills: object = {};
    const outputArray: string[][][] = [];
    for (let pro: number = 0; pro < pros.length; pro++) {
        for (let job: number = 0; job < preferences[pro].length; job++) {
            if (skills.hasOwnProperty(preferences[pro][job])) {
                skills[preferences[pro][job]].push(pros[pro]);
            } else {
                skills[preferences[pro][job]] = pros;
            }
        }
    }
    console.log(skills);

    const skillList: string[] = [];
    for (let subSkill in skills) {
        skillList.push(subSkill);
    }
    console.log(skills);
    //console.log(skills["Handyman"]);
    //console.log(skills["Handyman"].length);
    console.log(skillList);
    console.log(skillList.length)
    for(let skill: number = 0; skill < skillList.length; skill++){
        const outputRow: string[][] = [];
        const thisSkill: string[] = [];
        thisSkill.push(skillList[skill]);
        console.log(skillList[skill]);
        outputRow.push(thisSkill);
        
        console.log(skills[skillList[skill]]);
        console.log(skills[skillList[skill]].length);
        const professional: string[] = [];
        for(let j: number = 0; j < skills[skillList[skill]].length; j++){
            console.log(skills[skillList[skill]][j]);
             professional.push(skills[skillList[skill]][j]);
             console.log(professional);
        }
        outputRow.push(professional);
        outputArray.push(outputRow);
    }
    console.log(outputArray.length)
    console.log(outputArray[0].length)
    return outputArray;
}


// [ [ [ "Computer repair" ], [ "Jack" ] ] ];
//console.log(proCategorization(["Jack"], [["Computer repair"]]));

console.log(proCategorization(["Jack", "Leon"], [ ["Computer repair"], ["Computer lessons"] ] ));

// [ 
//    [ 
//      [ "Computer repair" ], [ "Jack" ] 
//      [ "Handyman" ], [ "Jack" ] 
//      [ "House cleaning" ], [ "Jack" ] 
//    ] 
// ];
// console.log(proCategorization(["Jack"], [["Handyman", "House cleaning"]]));

//console.log(proCategorization(["Jack"], [["Computer repair", "Handyman", "House cleaning"]]));


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


// console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
// ["Computer lessons", "Computer repair", "Data recovery service"],
// ["Computer lessons", "House cleaning"]]));
