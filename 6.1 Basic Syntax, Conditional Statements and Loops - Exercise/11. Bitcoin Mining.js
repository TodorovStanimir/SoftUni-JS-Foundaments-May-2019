function bitcoinMining(input) {
    let amountInLevs = 0;
    let boughtBitcoin = 0;
    let isNotBoughtBitcoin = true;
    let day = 0;
    let dayOfFirstBuyingBitcoin = 0;

    for (let i = 0; i < input.length; i++) {
        day++;
        let gold = input[i];
        if (day % 3 === 0) {
            gold -= 30 / 100 * gold;
        }
        amountInLevs += gold * 67.51;
        if (amountInLevs >= 11949.16 && isNotBoughtBitcoin) {
            dayOfFirstBuyingBitcoin = day;
            isNotBoughtBitcoin = false;
        }
        while ((amountInLevs / 11949.16) >= 1) {
            boughtBitcoin++;
            amountInLevs -= 11949.16;
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (dayOfFirstBuyingBitcoin!==0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBuyingBitcoin}`);
    }
    console.log(`Left money: ${amountInLevs.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([50,100]);
bitcoinMining([3124.15, 504.212, 2511.124]);