function solve(yield) {
    const priceGold = 67.51;
    const priceBTC = 11949.16;

    let day = 0;
    let ballance = 0;
    let boughtBTC = 0;
    let firstPurchase = 0;

    for (let i = 0; i < yield.length; i++) {

        day++;
        
        ballance += (day % 3 === 0) ? (yield[i] * 0.7 * priceGold) : (yield[i] * priceGold);

        if (ballance >= priceBTC) {
            firstPurchase = (firstPurchase < 1) ? day : firstPurchase;

            const currentTrade = Math.floor(ballance / priceBTC);
            boughtBTC += currentTrade;

            if ((ballance - priceBTC * currentTrade) < 0.001) {
                ballance = 0;
            } else {
                ballance -= priceBTC * currentTrade;
            }           
        }
    }

    console.log(`Bought bitcoins: ${boughtBTC}`);
    if (firstPurchase > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    }
    console.log(`Left money: ${ballance.toFixed(2)} lv.`);
}