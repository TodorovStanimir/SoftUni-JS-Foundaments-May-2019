function division(number) {
    let numberIsDivisible = false;
    let numberIsDivisibleBy = 0;
    if (number % 10 === 0) {
        numberIsDivisibleBy = 10
        numberIsDivisible = true;
    } else if (number % 7 === 0) {
        numberIsDivisibleBy = 7
        numberIsDivisible = true;
    } else if (number % 6 === 0) {
        numberIsDivisibleBy = 6
        numberIsDivisible = true;
    } else if (number % 3 === 0) {
        numberIsDivisibleBy = 3
        numberIsDivisible = true;
    } else if (number % 2 === 0) {
        numberIsDivisibleBy = 2
        numberIsDivisible = true;
    }
    if (numberIsDivisible) {
        console.log(`The number is divisible by ${numberIsDivisibleBy}`);

    } else {
        console.log('Not divisible');
    }
}
division(30);
division(15);
division(12);
division(1643);