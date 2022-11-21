function solve(input) {
    let arr = input.shift().split(' ').map(Number);

    let i = 0;
    while (input[i] !== 'end') {
        let [command, indexOne, indexTwo] = input[i].split(' ');

        switch (command) {
            case 'swap': {
                indexOne = Number(indexOne);
                indexTwo = Number(indexTwo);
                [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];
                break;
            }

            case 'multiply': {
                indexOne = Number(indexOne);
                indexTwo = Number(indexTwo);
                arr[indexOne] *= arr[indexTwo];
                break;
            }

            case 'decrease': {
                arr = arr.map(x => x - 1);
                break;
            }
        }

        i++;
    }

    console.log(arr.join(', '));
}