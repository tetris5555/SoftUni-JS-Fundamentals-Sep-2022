function solve(input) {
    let pirateShip = input.shift().split('>').map(Number);
    const warShip = input.shift().split('>').map(Number);
    const maxSectionHealth = Number(input.shift());
    let printSummery = true;

    let i = 0;
    exit: while (input[i] !== 'Retire') {
        const [cmd, ...other] = input[i].split(' ');

        switch(cmd) {
            case 'Fire': {
                const [idx, damage] = other.map(Number);
                if (warShip[idx]) {
                    warShip[idx] -= damage;

                    if (warShip[idx] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        printSummery = false;
                        break exit;
                    }
                }

                break;
            }

            case 'Defend': {
                const [s, e, damage] = other.map(Number); // end index 'e' is inclusive

                if (pirateShip[s] && pirateShip[e]) {
                    pirateShip = [...pirateShip.slice(0, s),
                                  ...pirateShip.slice(s, e + 1).map(x => x - damage),
                                  ...pirateShip.slice(e + 1)
                                ];
                    if (pirateShip.some(x => x <= 0)) {
                        console.log('You lost! The pirate ship has sunken.');
                        printSummery = false;
                        break exit;
                    }
                }

                break;
            }

            case 'Repair': {
                const [idx, health] = other.map(Number);

                if (pirateShip[idx]) {
                    const newHealthValue = pirateShip[idx] + health;
                    pirateShip[idx] = newHealthValue > maxSectionHealth ? maxSectionHealth : newHealthValue;
                }

                break;
            }

            case 'Status': {
                const threshold = maxSectionHealth * 0.2;
                const count = pirateShip.filter(x => x < threshold).length;
                console.log(`${count} sections need repair.`);

                break;
            }
        }
        i++;
    }
    if (printSummery) {
        const pirateShipSum = pirateShip.reduce((x, y) => x + y, 0);
    const warshipSum = warShip.reduce((x, y) => x + y, 0);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
    }
}