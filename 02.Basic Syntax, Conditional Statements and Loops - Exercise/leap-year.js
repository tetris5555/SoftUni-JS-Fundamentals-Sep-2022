function solve(year) {
    const output = (year % 4 == 0 && year % 100 != 0) ||
                    year % 400 == 0;

    output ? console.log('yes') : console.log('no');
}