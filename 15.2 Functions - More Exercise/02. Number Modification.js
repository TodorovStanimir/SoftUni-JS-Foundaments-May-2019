function numberModification(input) {
    input = String(input);
    let averageValueOfDigits = calculateAverageValueOfDigits(input)

    while (averageValueOfDigits <= 5) {
        input = input.concat('9');
        averageValueOfDigits = calculateAverageValueOfDigits(input)
    }
    console.log(input);

    function calculateAverageValueOfDigits(str) {
        let arrayOfDigits = str.split('').map(Number);
        let sum = 0;
        arrayOfDigits.forEach(el => {
            sum += el;
        });
        return sum / arrayOfDigits.length;
    }
}
numberModification(101);
numberModification(5835);