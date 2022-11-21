function solve(arr) {
    arr = arr.split(' ').map(Number);
    const result = [];

    const len = arr.length;
    const average = arr.reduce((x, y) => x + y, 0) / len;

    for (let i = 0; i < len; i++) {
        if (arr[i] > average) result.push(arr[i]);
    }

    result.sort((a, b) => b - a);

    result.length > 0 ? console.log(result.slice(0, 5).join(' ')) : console.log('No');
}