function solve(input) {
    let rooms = input.split('|');

    let health = 100;
    let coins = 0;
    let dead = false;

    for (let i = 0; i < rooms.length; i++) {
        let [command, value] = rooms[i].split(' ');

        switch (command) {
            case 'potion': {
                value = Number(value);
                const hp = (health + value) > 100 ? (100 - health) : value;
                console.log(`You healed for ${hp} hp.`);
                health = Math.min(100, (health + value));
                console.log(`Current health: ${health} hp.`);

                break;
            }

            case 'chest': {
                value = Number(value);
                console.log(`You found ${value} bitcoins.`);
                coins += value;

                break;
            }

            default: {
                value = Number(value);
                health -= value;

                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i + 1}`);
                    dead = true;
                }
                break;
            }
        }
        if (dead) break;
    }

    if (!dead) {
        console.log('You\'ve made it!');
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}