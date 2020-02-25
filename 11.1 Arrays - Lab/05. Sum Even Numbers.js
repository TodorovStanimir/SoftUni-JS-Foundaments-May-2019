function sumEvenNumbers(input) {
    let result = 0;
    input.map(Number).forEach(element => {
        if (element % 2 === 0) {
            result += Number(element);
        }
    });
    console.log(result);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);