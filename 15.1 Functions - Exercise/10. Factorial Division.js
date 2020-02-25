function factorialDivision(num1, num2) {
    let factorial1 = num1;
    let factorial2 = num2;
    for (let i = num1 - 1; i > 0; i--) {
        factorial1 = factorial1 * i;
    }
    for (let y = num2 - 1; y > 0; y--) {
        factorial2 = factorial2 * y;
    }
    if (factorial1 === 0) {
        factorial1 = 1;
    }
    if (factorial2 === 0) {
        factorial2 = 1;
    }
    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));
}
factorialDivision(6, 2);