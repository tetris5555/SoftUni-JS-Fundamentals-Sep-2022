function solve(binAsString) {
    console.log(parseInt(binAsString, 2));
}

// ---------------------------

function solve2(binaryString) {
    let i = binaryString.length - 1;
    let result = 0;
    let p = 0;

    while (i > -1) {            
        result += Number(binaryString[i]) * (2 ** p);
        p++;
        i--;
    }

    console.log(result);
}

solve('1101011');
solve2('1101011')