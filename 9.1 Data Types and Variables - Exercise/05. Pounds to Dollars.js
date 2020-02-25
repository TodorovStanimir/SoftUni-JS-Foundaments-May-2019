function poundsToDollars(pounds) {
    let rate = 1.31;
    let dollar = pounds * rate;
    console.log(dollar.toFixed(3));
}
poundsToDollars(80);
poundsToDollars(39);