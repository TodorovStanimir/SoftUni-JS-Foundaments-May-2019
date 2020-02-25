function sumFirstAndLastElement(input) {
    let result = input.slice().map(Number);
    let output=result.shift()+result.pop();
    console.log(output);
}
sumFirstAndLastElement(['20', '30', '40']);
sumFirstAndLastElement(['5', '10']);