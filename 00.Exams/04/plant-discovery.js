function solve(arr) {
    const n = Number(arr.shift());
    const plants = new Map();

    for (let e of arr.slice(0, n)) {
        const [p, r] = e.split('<->');
        plants.set(p, {rarity: Number(r), rating: []});
    }

    arr.pop();
    const re = /(?<cmd>Rate|Update|Reset):\s(?<p>\w+)(\s-\s(?<op>\d+))?/;

    for (let e of arr.slice(n)) {
        const {cmd, p, op} = re.exec(e).groups;

        if (!plants.has(p)) {
            console.log('error');
            continue;
        }

        switch (cmd) {
            case 'Rate': {
                plants.get(p).rating.push(Number(op));
                break;
            }
            case 'Update': {
                plants.get(p).rarity = Number(op);
                break;
            }
            case 'Reset': {
                plants.get(p).rating = [];
                break;
            }    
        }
    }
    console.log('Plants for the exhibition:');

    [...plants.entries()].forEach(([plant, {rarity, rating}]) => {
        const total = rating.reduce((x, y) => x + y, 0);
        const len = rating.length;
        const avg = total == 0 ? 0 : total / len;
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avg.toFixed(2)}`);
    })
}

solve([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);

// solve([
//     "2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"
// ]);
