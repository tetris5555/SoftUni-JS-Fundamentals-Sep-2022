function solve(op1, operator, op2) {
    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
    }

    console.log(operators[operator](op1, op2).toFixed(2));
}


solve(25.5, '-', 3);