function solve(data) {
    let numbers = data.shift().split(' ');
    let moves = 0;

    let i = 0;
    while (data[i] !== 'end') {
        moves++;

        const [k, l] = data[i].split(' ').map(Number);

        if (k === l || numbers[k] === undefined || numbers[l] === undefined) {
            const midIndex = numbers.length / 2;
            const element = `-${moves}a`;
            console.log('Invalid input! Adding additional elements to the board');
            numbers.splice(midIndex, 0, ...[element, element]);

        } else if (numbers[k] !== numbers[l]) {
            console.log('Try again!');

        } else {
            const element = numbers[k];
            console.log(`Congrats! You have found matching elements - ${element}!`);
            numbers[k] = null;
            numbers[l] = null;
            numbers = numbers.filter(x => x !== null);
        }
        
        if (numbers.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        i++;
    }

    if (numbers.length > 0) {
        console.log('Sorry you lose :(');
        console.log(numbers.join(' '));
    }
}