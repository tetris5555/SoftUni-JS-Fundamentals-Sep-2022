function solve(input) {
    let chest = input.shift().split('|');
    input.pop();

    input.forEach(e => {
        const [cmd, ...other] = e.split(' ');

        switch (cmd) {
            case 'Loot': {
                other.forEach(item => {
                    if (chest.indexOf(item) === -1) {
                        chest.unshift(item);
                    } 
                })

                break;
            }

            case 'Drop': {
                const [idx] = other.map(Number);

                if (chest[idx]) {
                    chest.push(chest[idx]);
                    chest.splice(idx, 1);
                }

                break;
            }

            case 'Steal': {
                const [count] = other.map(Number);
                const stollenItems = chest.slice(-count).join(', ');
                console.log(stollenItems);
                chest = chest.slice(0, -count);

                break;
            }
        }
    });
    
    const gain = chest.map(x => x.length).reduce((x, y) => x + y, 0) / chest.length;
    if (gain > 0) {
        console.log(`Average treasure gain: ${gain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}