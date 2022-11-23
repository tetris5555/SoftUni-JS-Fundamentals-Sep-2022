function solve(arr) {
    const text = arr[0];
    const coolThreshould = text.match(/\d/g).map(Number).reduce((x, y) => x * y, 1);

    const re = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    const emoji = text.match(re);
    const emojiCount = emoji.length;

    console.log(`Cool threshold: ${coolThreshould}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    emoji.forEach(e => {
        const curClns = e.match(/[a-z]/gi).map(x => x.charCodeAt(0)).reduce((x, y) => x + y, 0);
        if (curClns > coolThreshould) {
            console.log(e);
        }
    });
}