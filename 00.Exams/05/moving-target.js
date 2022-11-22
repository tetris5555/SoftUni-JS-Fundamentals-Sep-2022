function solve(arr) {
    const targets = arr.shift().split(' ').map(Number);

    let i = 0;
    while (arr[i] !== 'End') {
         let [command, idx, val] = arr[i].split(' ');
         idx = Number(idx);
         val = Number(val);

         switch (command) {
            case 'Shoot': {
                if (targets[idx] !== undefined) {
                    targets[idx] -= val;
                    if (targets[idx] <= 0) {
                        targets.splice(idx, 1);
                    }
                }
                break;
            }
            case 'Add': {
                if (targets[idx] === undefined) {
                    console.log('Invalid placement!');
                } else {
                    targets.splice(idx, 0, val);
                }
                break;
            }
            case 'Strike': {
                const startIndex = idx - val;
                const endIndex = idx + val;
                const span = endIndex - startIndex + 1;

                if (targets[startIndex] === undefined || targets[endIndex] === undefined) {
                    console.log('Strike missed!');
                } else {
                    targets.splice(startIndex, span);
                }
                break;
            }
         }

        i++;
    }
    console.log(targets.join('|'));
}