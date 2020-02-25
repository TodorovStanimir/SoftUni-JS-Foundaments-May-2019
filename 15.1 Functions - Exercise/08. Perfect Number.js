function perfectNumber(number) {
    let sumOfPositiveDivisors = 0;
    for (let divisor = 1; divisor <= number / 2; divisor++) {
        if (number % divisor === 0) {
            sumOfPositiveDivisors += divisor;
        }
    }
    if (number === sumOfPositiveDivisors) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);