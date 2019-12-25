function tasksTypes(deadlines: number[], day: number): number[] {
    let today: number = 0;
    let upcoming: number = 0;
    let later: number = 0;
    for (let i: number = 0; i <= deadlines.length; i++) {
        const diff = deadlines[i] - day;
        today += diff <= 0 ? 1 : 0;
        upcoming += diff > 0 && diff <= 7 ? 1 : 0;
        later += deadlines[i] - day > 7 ? 1 : 0;
    }
    return [today, upcoming, later];
}

//                                            [ 2, 3, 0 ]
console.log(tasksTypes([1, 2, 3, 4, 5], 2));
//                                                                  [ 2, 8, 2 ]
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
