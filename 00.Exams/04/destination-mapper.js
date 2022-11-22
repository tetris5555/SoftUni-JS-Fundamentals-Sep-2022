function solve(str) {
    const re = /(=|\/)[A-Z][A-Za-z]{2,}\1/g;
    const m = str.match(re);
    let destinations = [];
    if (m) {
        destinations = m.map(x => x.slice(1, -1));
    }
    console.log('Destinations: ' + destinations.join(', '));
    console.log('Travel Points: ' + destinations.map(x => x.length).reduce((x, y) => x + y, 0));
}