function solve(pages, pageHour, days) {
    const hoursPerDay = (pages / pageHour) / days;
    console.log(hoursPerDay.toFixed(1));
}


solve(432, 15 , 4);