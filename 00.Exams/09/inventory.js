function solve(arr) {
    const items = arr.shift().split(', ');

    let i = 0;
    while (arr[i] !== 'Craft!') {
        let [command, ...rest] = arr[i].split(' - ');

        switch (command) {
            case 'Collect': {
                const [item] = rest;
                
                if (items.indexOf(item) < 0) {
                    items.push(item);
                }
                break;
            }
            case 'Drop': {
                const [item] = rest;
                const idx = items.indexOf(item);

                if (items[idx] !== undefined) {
                    items.splice(idx, 1);
                }

                break;
            }
            case 'Combine Items': {
                const [oldItem, newItem] = rest[0].split(':');
                const oldItemIndex = items.indexOf(oldItem);

                if (items[oldItemIndex] !== undefined) {
                    items.splice(oldItemIndex + 1, 0, newItem);
                }
                break;
            }
            case 'Renew': {
                const [item] = rest;
                const idx = items.indexOf(item);

                if (items[idx] !== undefined) {
                    items.splice(idx, 1);
                    items.push(item);
                }
                break;
            }
        }

        i++;
    }
    console.log(items.join(', '));
}