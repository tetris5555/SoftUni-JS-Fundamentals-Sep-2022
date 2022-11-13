function solve(number) {
    const divisors = [10, 7, 6, 3, 2, 0];

    for (let divisor of divisors) {
        if (isNaN(number % divisor)) {
            console.log('Not divisible');
        }

        if (number % divisor == 0) {
            console.log(`The number is divisible by ${divisor}`);
            break;
        }
    }
}