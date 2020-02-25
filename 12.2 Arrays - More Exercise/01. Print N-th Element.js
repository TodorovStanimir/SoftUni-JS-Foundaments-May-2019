function printNElement(input) {
    let step = Number(input.pop());
    let output = []
    for (let i = 0; i < input.length; i += step) {
        output.push(input[i]);
    }
    console.log(output.join(' '));
}
printNElement(['5', '20', '31', '4', '20', '2']);
printNElement(['dsa', 'asd', 'test', 'test', '2']);
printNElement(['1', '2', '3', '4', '5', '6']);