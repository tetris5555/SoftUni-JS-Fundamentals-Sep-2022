function solve(arr) {
    let rawKey = arr.shift();
    arr.pop();
    const transform = {
        'Upper': (s) => s.toUpperCase(),
        'Lower': (s) => s.toLowerCase() 
    }

    for (const line of arr) {
        const [cmd, ...rest] = line.split('>>>');

        switch (cmd) {
            case 'Contains': {
                const sub = rest[0];
                if (rawKey.includes(sub)) {
                    console.log(`${rawKey} contains ${sub}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            }
            case 'Flip': {
                let [op, start, end] = rest;
                start = Number(start);
                end = Number(end);

                let sub = rawKey.slice(start, end);
                sub = transform[op](sub);
                rawKey = rawKey.slice(0, start) + sub + rawKey.slice(end);
                console.log(rawKey);
                break;
            }
            case 'Slice': {
                const [start, end] = rest.map(Number);
                rawKey = rawKey.slice(0, start) + rawKey.slice(end);
                console.log(rawKey);
                break;
            }
        }
    }
    console.log(`Your activation key is: ${rawKey}`);
}