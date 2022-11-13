function solve(number) {
    // A number is special when its sum of digits is 5, 7 or 11.
    for (let i = 1; i <= number; i++) {
        console.log(`${i} -> ${capitalize(isSpecial(i).toString())}`)
    }

    // ------------- helper functions --------------------------
    function isSpecial (num) {
        const sumDigits = Array.
                            from(num.toString(), x => Number(x)).
                            reduce((x, y) => x + y, 0).toString();

        return sumDigits.includes('5') ||
               sumDigits.includes('7') ||
               sumDigits.includes('9');
    }

    function capitalize (str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

function solve2(num) {
    for (let i = 1; i <= num; i++) {

        let sum = 0;
        for (let c of i.toString()) {
            sum += Number(c);
        }
        sum = sum.toString();

        const result = (sum.includes('5') ||
                        sum.includes('7') ||
                        sum.includes('9')) ? 'True' : 'False';
                        
        console.log(`${i} -> ${result}`);
    }
}

// solve(15);
solve2(15);