function solve(arr) {
    const houses = arr.shift().split('@').map(Number);

    let houseIndex = 0;
    let i = 0;

    while (arr[i] !== 'Love!') {
        const jump = Number(arr[i].split(' ')[1]);

        houseIndex += jump;
        
        if (houses[houseIndex] === undefined) {
            houseIndex = 0;
        }

        if (houses[houseIndex] > 0) {
            houses[houseIndex] -= 2;

            if (houses[houseIndex] === 0) {
                console.log(`Place ${houseIndex} has Valentine's day.`);
            }

        } else {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
        }
        
        i++;
    }

    console.log(`Cupid's last position was ${houseIndex}.`);
    
    const houseCount = houses.filter(x => x > 0).length;

    if (houseCount > 0) {
        console.log(`Cupid has failed ${houseCount} places.`);
    } else {
        console.log('Mission was successful.');
    }
}