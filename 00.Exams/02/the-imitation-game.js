function solve(arr) {
    let msg = arr.shift();

    let i = 0;
    while (arr[i] !== 'Decode') {
        let [instruction, ...params] = arr[i].split('|');

        switch (instruction) {
            case 'Move':{
                // Moves the first n letters to the back of the string
                const count = Number(params[0]);
                const prefix = msg.slice(0, count);
                msg = msg.slice(count) + prefix;
                break;
            }
            case 'Insert': {
                // Inserts the given value before the given index in the string
                let [index, val] = params;
                index = Number(index);
                msg = [...msg];
                msg.splice(index, 0, val);
                msg = msg.join('');
                break;
            }
            case 'ChangeAll': {
                // Changes all occurrences of the given substring with the replacement text
                const [subString, replacement] = params;

                msg = [...msg];
                for (let i = 0; i < msg.length; i++) {
                    if (msg[i] === subString) {
                        msg[i] = replacement;
                    }
                }
                msg = msg.join('');
                break;
            }
        }
        i++;
    }
    console.log(`The decrypted message is: ${msg}`);
}