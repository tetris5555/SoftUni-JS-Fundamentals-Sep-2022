 function solve(arr) {
    let text = arr.shift();
    arr.pop();

    for (const line of arr) {
        const [cmd, ...rest] = line.split(' ');
        switch (cmd) {
            case 'TakeOdd': {
                text = [...text].map((ch, idx) => {
                    if (idx % 2 == 1) {
                        return ch;
                    }
                }).join('');
                console.log(text);
                break;
            }
            case 'Cut': {
                const [idx, len] = rest.map(Number);
                text = text.slice(0, idx) + text.slice(idx + len);
                console.log(text);
                break;
            }
            case 'Substitute': {
                const [sub, repl] = rest;
                if (text.includes(sub)) {
                    text = text.replace(new RegExp(`${sub}`, 'g'), () => repl);
                    console.log(text);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
            }
        }
    }
    console.log(`Your password is: ${text}`);
 }


 solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
 