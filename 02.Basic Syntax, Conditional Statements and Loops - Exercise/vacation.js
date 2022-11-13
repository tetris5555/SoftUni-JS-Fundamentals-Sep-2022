function solve(countPeople, groupType, dayOfWeek) {
    groupType = groupType.toLowerCase();
    dayOfWeek = dayOfWeek.toLowerCase();

    const ratePerDay = {
        'students': {
            'friday': 8.45,
            'saturday': 9.8,
            'sunday': 10.46 
        },
        'business': {
            'friday': 10.9,
            'saturday': 15.6,
            'sunday': 16 
        },
        'regular': {
            'friday': 15,
            'saturday': 20,
            'sunday': 22.5 
        }
    }
    const rate = ratePerDay[groupType][dayOfWeek];
    const discount = (groupType == 'students' && countPeople >= 30) ? 15 :
                     (groupType == 'regular' && (countPeople >= 10 && countPeople <= 20)) ? 5 : 0;

    countPeople = (groupType == 'business' && countPeople >= 100) ? countPeople -= 10 : countPeople;
    const grandTotal = rate * countPeople * (100 - discount) / 100;

    console.log(`Total price: ${grandTotal.toFixed(2)}`);
}