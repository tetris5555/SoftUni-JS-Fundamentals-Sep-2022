function solve(num) {

    const digitsSum = Array.
                        from(num.toString(), x => Number(x)).
                        reduce((x, y) => (x + y), 0);

    const isAmazing = (digitsSum.toString().includes('9')) ? 'True' : 'False';

    console.log(`${num} Amazing? ${isAmazing}`);
}

solve(999);