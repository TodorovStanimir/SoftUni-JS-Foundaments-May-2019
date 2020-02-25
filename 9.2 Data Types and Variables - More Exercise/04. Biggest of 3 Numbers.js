function biggestOfThreeNumbers(num1, num2, num3) {
    let output;
    if (num1 >= num2) {
        if (num1 >= num3) {
            output = num1;
        } else {
            output = num3;
        }
    } else if (num2 >= num3) {
        output = num2;
    } else {
        output = num3;
    }
    console.log(output);
}
biggestOfThreeNumbers(-2, 7, 3);
biggestOfThreeNumbers(130, 5, 99);
biggestOfThreeNumbers(43, 43.2, 43.1);