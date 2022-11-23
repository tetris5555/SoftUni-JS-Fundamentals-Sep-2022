function solve(arr) {
    arr.pop();
    const idx = arr.indexOf('Sail');
    const cities = new Map(); // collection of cities in format: { cityName -> {population, gold}, ...

    // --------------------------------
    // Object constructor: city features
    class F {
        constructor(population, gold) {
            this.population = population;
            this.gold = gold;
        }
        pludner(p, g) { // people, gold
            this.gold -= g;
            this.population -= p;
            return this.population <= 0 || this.gold <= 0; // if true, city is destroyed
        }

        prosper(town, g) { // town name, gold
            let msg = '';
            if (g < 0) {
                msg = 'Gold added cannot be a negative number!';
            } else {
                this.gold += g;
                msg = `${g} gold added to the city treasury. ${town} now has ${this.gold} gold.`;
            }
            return msg;
        }

        update(p, g) { // people, gold
            this.population += p;
            this.gold += g;
        }
    }
    // --------------------------------
    // Parse cities
    for (let i = 0; i < idx; i++) {
        const [city, population, gold] = arr[i].split('||');

        if (!cities.has(city)) {
            cities.set(city, new F(Number(population), Number(gold)));
        } else {
            cities.get(city).update(Number(population), Number(gold));
        }
    }

    // --------------------------------
    // Parse events
    for (const line of arr.slice(idx + 1)) {
        let [cmd, ...rest] = line.split('=>');
        cmd = cmd.toLowerCase();

        switch (cmd) {
            case 'plunder': {
                let [city, people, gold] = rest;
                people = Number(people), gold = Number(gold);

                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (cities.get(city).pludner(people, gold)) {
                    console.log(`${city} has been wiped off the map!`);
                    cities.delete(city);
                }

                break;
            }
            case 'prosper': {
                const [city, gold] = rest;
                console.log(cities.get(city).prosper(city, Number(gold)));

                break;
            }
        }
    }
    // --------------------------------
    // Print out summery
    if (cities.size > 0) {
        console.log(`Ahoy, Captain! There are ${cities.size} wealthy settlements to go to:`);

        [...cities.entries()] // --> [cityName, {population, gold}, ...]
            .forEach(([city, { population, gold }]) => {
                console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
            });
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}