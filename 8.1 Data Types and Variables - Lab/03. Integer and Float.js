function integerAndFloat(num1, num2, num3) {
    let result = num1 + num2 + num3;
    console.log((result === parseInt(result)) ? `${result} - Integer` : `${result} - Float`);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);