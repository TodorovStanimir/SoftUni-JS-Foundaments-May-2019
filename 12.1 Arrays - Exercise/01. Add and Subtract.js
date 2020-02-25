function addAndSubtract(input) {
    let output = [];
    sumInput = 0;
    sumOutput = 0;
    let currentNumber = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            currentNumber = input[i] + i;
            output.push(currentNumber);
        } else {
            currentNumber = input[i] - i;
            output.push(currentNumber);
        }
        sumInput += input[i];
        sumOutput += output[i];
    }
    console.log(output);
    console.log(sumInput);
    console.log(sumOutput);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2])