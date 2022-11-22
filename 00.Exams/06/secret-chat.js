function solve(arr) {
    arr.pop();
    let msg = arr.shift();

    for (const line of arr) {
        const [cmd, ...rest] = line.split(':|:');

        switch (cmd) {
            case 'InsertSpace': {
                let idx = Number(rest[0]);
                msg = msg.slice(0, idx) + ' ' + msg.slice(idx);
                break;
            }
            case 'Reverse': {
                const sub = rest[0];
                if (msg.includes(sub)) {
                    msg = msg.replace(sub, '');
                    msg += reverseStr(sub);
                } else {
                    console.log('error');
                    continue;
                }
                break;
            }
            case 'ChangeAll': {
                const [sub, rep] = rest;
                msg = msg.replace(new RegExp(`${sub}`, 'g'), () => rep);
                break;
            }
        }
        console.log(msg);
    }
    console.log(`You have a new text message: ${msg}`);

    //-------------
    function reverseStr(s) {
        return [...s].reverse().join('');
    }
}