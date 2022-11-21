function solve(arr) {
    const n = arr.shift();

    const collection = new Map(); // piece -> composer, key
    for (const e of arr.slice(0, n)) {
        const [piece, composer, key] = e.split('|');
        collection.set(piece, {composer, key});
    }

    for (const e of arr.slice(n, arr.length - 1)) {
        const [command, ...rest] = e.split('|');

        switch (command) {
            case 'Add': {
                const [piece, composer, key] = rest;
                if (collection.has(piece)) {
                    console.log(`${piece} is already in the collection!`);
                }
                else {
                    collection.set(piece, {composer, key});
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }
                break;
            }
            case 'Remove': {
                const [piece] = rest;
                if (collection.has(piece)) {
                    collection.delete(piece);
                    console.log(`Successfully removed ${piece}!`);
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
            }
            case 'ChangeKey': {
                const [piece, key] = rest;
                if (collection.has(piece)) {
                    collection.get(piece).key = key;
                    console.log(`Changed the key of ${piece} to ${key}!`);
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
            }
        }
    }
    [...collection.entries()].forEach(e => {
        console.log(`${e[0]} -> Composer: ${e[1].composer}, Key: ${e[1].key}`);
    });
}