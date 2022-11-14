function solve (number) {
    return Array.from(number.toString(), x => Number(x)).
            reduce((x, y) => x + y, 0);
}

console.log(solve(245678));