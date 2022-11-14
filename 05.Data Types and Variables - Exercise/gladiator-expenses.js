function solve(lostFights,
               helmetPrice,
               swordPrice,
               shieldPrice,
               armorPrice) {
    
    const brokenHelmets = Math.floor(lostFights / 2);
    const brokenSwords = Math.floor(lostFights / 3);
    const brokenShields = Math.floor(lostFights / 6);
    const brokenArmours = Math.floor(brokenShields / 2);

    let totalExpenses = brokenHelmets * helmetPrice;
    totalExpenses += brokenSwords * swordPrice;
    totalExpenses += brokenShields * shieldPrice;
    totalExpenses += brokenArmours * armorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)

}


solve(7, 2, 3, 4, 5); // --> 16

solve(23, 12.50, 21.50, 40, 200); // --> 608