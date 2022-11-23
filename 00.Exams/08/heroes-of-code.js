function solve(arr) {
    const n = Number(arr.shift());
    const heroes = new Map();

    for (let i = 0; i < n; i++) {
        const [name, hp, mp] = arr[i].split(' ');
        heroes.set(name, {hp: Number(hp), mp: Number(mp)});
    }

    arr.pop();
    const len = arr.length;

    for (let i = n; i < len; i++) {
        const [cmd, hn, ...rest] = arr[i].split(' - ');

        switch (cmd) {
            case 'CastSpell': {
                let [mpn, spn] = rest;
                mpn = Number(mpn);

                if (heroes.get(hn).mp >= mpn) {
                    heroes.get(hn).mp -= mpn;
                    console.log(`${hn} has successfully cast ${spn} and now has ${heroes.get(hn).mp} MP!`);
                } else {
                    console.log(`${hn} does not have enough MP to cast ${spn}!`);
                }

                break;
            }
            case 'TakeDamage': {
                let [dmg, attacker] = rest;
                dmg = Number(dmg);

                if (heroes.get(hn).hp > dmg) {
                    heroes.get(hn).hp -= dmg;
                    console.log(`${hn} was hit for ${dmg} HP by ${attacker} and now has ${heroes.get(hn).hp} HP left!`);
                } else {
                    console.log(`${hn} has been killed by ${attacker}!`);
                    heroes.delete(hn);
                }

                break;
            }
            case 'Recharge': {
                const amount = Number(rest[0]);
                const newMp = heroes.get(hn).mp + amount;
                const rechargedBy = newMp > 200 ? 200 - heroes.get(hn).mp : amount;
                console.log(`${hn} recharged for ${rechargedBy} MP!`);
                heroes.get(hn).mp = Math.min(200, newMp);
                break;
            }
            case 'Heal': {
                const amount = Number(rest[0]);
                const newHp = heroes.get(hn).hp + amount;
                const healeddBy = newHp > 100 ? 100 - heroes.get(hn).hp : amount;
                console.log(`${hn} healed for ${healeddBy} HP!`);
                heroes.get(hn).hp = Math.min(100, newHp);
                break;
            }
        }
    }
    [...heroes.entries()].forEach(([name, {hp, mp}]) => {
        console.log(`${name}\n  HP: ${hp}\n  MP: ${mp}`);
    })
}