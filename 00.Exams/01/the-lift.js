function solve(arr) {
    let n = Number(arr.shift());
    const cars = arr[0].split(' ').map(Number);
    
    for (let i = 0; n > 0 && i < cars.length; i++) {
        const seatsCurCar = Math.min(4 - cars[i], n);

        cars[i] += seatsCurCar;
        n -= seatsCurCar;
    }
    const leftSeats = cars.map(x => 4 - x).reduce((x, y) => x + y, 0);
    let msg = '';

    if (leftSeats == 0 && n > 0) {
        msg = `There isn't enough space! ${n} people in a queue!\n`;
    } else if (leftSeats > 0 && n == 0){
        msg = 'The lift has empty spots!\n';
    }
    console.log(msg + cars.join(' '));
}