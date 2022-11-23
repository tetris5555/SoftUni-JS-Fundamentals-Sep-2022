function solve(input) {
    input = input.map(Number);

    const numberOfStudents = input.shift();
    const numberOfLectures = input.shift();
    const additionalBonus = input.shift();

    let maxBonus = 0;
    let maxAttendance = 0

    for (let i = 0; i < numberOfStudents; i++) {
        const currentAttendance = input[i];
        let currentBonus = (currentAttendance / numberOfLectures) * (5 + additionalBonus);
        currentBonus = Math.round(currentBonus);

        if (currentBonus > maxBonus) {
            maxBonus = currentBonus;
            maxAttendance = currentAttendance;
        }
    }

    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}