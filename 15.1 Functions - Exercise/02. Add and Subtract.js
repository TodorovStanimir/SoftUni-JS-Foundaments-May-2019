function addAndSubtract(num1, num2, num3) {
    let result = sum(num1, num2)
        result -= num3;
        console.log(result);

    function sum(num1, num2) {
        let result = num1 + num2;
        return result;
    }
}
addAndSubtract(23, 6, 10)