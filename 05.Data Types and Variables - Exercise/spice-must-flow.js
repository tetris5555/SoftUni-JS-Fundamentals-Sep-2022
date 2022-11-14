function solve(yield) {
    let days = 0;
    let extracted = 0;

    while (yield >= 100) {
        days++;
        extracted += yield;
        extracted -= (extracted < 26) ? extracted : 26;
        yield -= 10;
    }

    extracted -= (extracted < 26) ? extracted : 26;

    console.log(days);
    console.log(extracted);
}


solve(450);