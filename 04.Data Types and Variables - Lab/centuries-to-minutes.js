function solve(centr) {
    const years = 100 * centr;
    const days = Math.trunc(years * 365.2422);
    const hours = days * 24;
    const minutes = 60 * hours;

    console.log(`${centr} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}