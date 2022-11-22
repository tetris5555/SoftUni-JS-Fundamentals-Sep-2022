function solve(input) {
    input = input.map(Number);

    let food = input.shift() * 1000; // food in gr
    let hay = input.shift() * 1000; // hay in gr
    let cover = input.shift() * 1000; // cover in gr
    let guinea = input.shift() * 1000; // weight in gr

    let day = 1;

    do {
        food -= 300;

        if (day % 2 === 0) {
            hay -= (food * 0.05);
        }

        if (day % 3 === 0) {
            cover -= (guinea / 3);
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log('Merry must go to the pet store!');
            break;
        }
        day++;
    } while (day <= 30);

    if (food > 0 && hay > 0 && cover > 0) {
        food /= 1000;
        hay /= 1000;
        cover /= 1000;

        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }
}