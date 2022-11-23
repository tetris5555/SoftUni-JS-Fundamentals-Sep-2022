function solve(input) {
    const [days, dailyPlunder, target] = input.map(Number);

    let total = 0;
    const bonus = dailyPlunder * 0.5;

    for (let i = 1; i <= days; i++) {
        total += dailyPlunder;

        if (i % 3 === 0 && i % 5 === 0) {
            total += bonus;
            total *= 0.7;
        } else if (i % 3 === 0) {
            total += bonus;
        } else if (i % 5 === 0) {
            total *= 0.7;
        }
    }

    if (total < target) {
        const totalAsPercent = total * 100 / target;
        console.log(`Collected only ${totalAsPercent.toFixed(2)}% of the plunder.`);
    } else {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    }
}