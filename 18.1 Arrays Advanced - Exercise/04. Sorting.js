sorting = input => {
    let sortedInput = input.sort((a, b) => b - a)
    let counter = 0;
    let output = [];
    let currentNumber = sortedInput[0];
    while (currentNumber !== undefined) {
        counter % 2 === 0 ? currentNumber = sortedInput.shift() : currentNumber = sortedInput.pop();
        output.push(currentNumber);
        counter++;
    }
    console.log(output.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])