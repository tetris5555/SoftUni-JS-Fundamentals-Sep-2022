function solve(number, prec) {
    prec = (prec > 15) ? 15 : prec;

    console.log(+number.toFixed(prec));
}