function solve(arr) {
    const re = /^@#+(?<content>[A-Z][A-Za-z\d]{4,}[A-Z])@#+$/m;

    for (let bc of arr.slice(1)) {
        const m = re.exec(bc);

        if (m) {
            const {content} = m.groups;
            const pgm = content.match(/\d/g);
            const pg = pgm ? pgm.join('') : '00';
            console.log(`Product group: ${pg}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}