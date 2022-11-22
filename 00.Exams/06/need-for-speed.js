function solve(arr) {
    let n = Number(arr.shift());
    arr.pop();
    const len = arr.length;

    const cars = new Map();
    const re = /(?<model>[\w\s]+)\|(?<mileage>\d+)\|(?<fuel>\d+)/i;

    for (let i = 0; i < n; i++) {
        const {model, mileage: mileage, fuel} = arr[i].match(re).groups;
        cars.set(model, {mileage: Number(mileage), fuel: Number(fuel)});
    }

    for (let i = n; i < len; i++) {
        let [activity, ...rest] = arr[i].split(/\s*:\s*/);
        
        if (activity == 'Drive') {
            let [car, mileage, fuel] = rest;
            mileage = Number(mileage);
            fuel = Number(fuel);
            
            if (cars.get(car).fuel >= fuel) {
                cars.get(car).mileage += mileage;
                cars.get(car).fuel -= fuel;
                console.log(`${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`);

                if (cars.get(car).mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    cars.delete(car);
                }
            }
            else {
                console.log('Not enough fuel to make that ride');
            }
        }
      	else if (activity == 'Refuel') {
            let [car, fuel] = rest;
            fuel = Number(fuel);

            const newTank = Math.min(cars.get(car).fuel + fuel, 75);
            let topped = (cars.get(car).fuel + fuel) > 75 ? 75 - cars.get(car).fuel : fuel;
            cars.get(car).fuel = newTank;
            console.log(`${car} refueled with ${topped} liters`);
        }
        else if (activity == 'Revert') {
            let [car, mileage] = rest;
            mileage = Number(mileage);

            if ((cars.get(car).mileage - mileage) < 10000) {
                cars.get(car).mileage = 10000;
            }
            else {
                console.log(`${car} mileage decreased by ${mileage} kilometers`);
                cars.get(car).mileage = cars.get(car).mileage - mileage;
            }
        }
    }
    [...cars.entries()].forEach(([car, {mileage, fuel}]) => {
        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    })
}