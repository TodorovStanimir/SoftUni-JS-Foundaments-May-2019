function spaceMustFlow(spice) {
    let days = 0;
    let totalAmount = 0;

    while (spice >= 100) {
        days++;
        totalAmount += spice;
        if (totalAmount >= 26) {
            totalAmount -= 26;
        } else {
            totalAmount = 0;
        }
        spice -= 10;
    }
    if (totalAmount >= 26) {
        totalAmount -= 26;
    } else {
        totalAmount = 0;
    };
    // totalAmount += spice
    console.log(days);
    console.log(totalAmount);

}
spaceMustFlow(111);