function solve(arr) {
    const customerType = arr.pop();
    arr = arr.map(Number);

    /*
    gross price -  the total cost of a product or service before any discounts or taxes are applied
    net price - the value at which a product or service is sold after all taxes and other costs are added and all discounts subtracted
    */

    let totalTax = 0;
    let grossPrice = 0;
    let netPrice = 0;

    const tax = 0.2;

    for (let item of arr) {
        if (item >= 0) {
            grossPrice += item;
        } else {
            console.log('Invalid price!');
        }
    }
    totalTax = grossPrice * tax;
    netPrice = grossPrice + totalTax;

    if (customerType === 'special') {
        netPrice *= 0.9;
    }

    if (grossPrice > 0) {
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${grossPrice.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${netPrice.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
}