function solve(arr) {
    let energy = Number(arr.shift());

    let wins = 0;
    let isOver = true;
    let i = 0;
    while (arr[i] !== 'End of battle') {
        const currentBattle = Number(arr[i]);

        if (currentBattle <= energy) {
            energy -= currentBattle;
            wins++;
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            isOver = false;
            break;
        }

        if (wins % 3 === 0) {
            energy += wins;
        }

        i++;
    }

    if (isOver) {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    }
}