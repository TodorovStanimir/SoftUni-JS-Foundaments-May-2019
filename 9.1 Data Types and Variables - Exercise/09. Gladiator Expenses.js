function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice, ) {
    let expenses = 0;
    let counterShieldBroken = 0;
    for (let game = 1; game <= lostFights; game++) {
        if (game % 2 === 0) {
            expenses += helmetPrice;
        }
        if (game % 3 === 0) {
            expenses += swordPrice;
        }
        if (game % 2 === 0 && game % 3 === 0) {
            expenses += shieldPrice;
            counterShieldBroken++;
        }
        if (counterShieldBroken === 2) {
            expenses += armorPrice;
            counterShieldBroken = 0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);