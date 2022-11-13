function solve(count) {
    let sum = 0;
    let n = 1;

    for (let i = 0; i < count; i++) {
        console.log(n);
        sum += n;
        n += 2;
    }
    console.log(`Sum: ${sum}`);
}