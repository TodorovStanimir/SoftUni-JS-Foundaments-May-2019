function processOddNumbers(input) {
    let output = [];
    for (let index in input) {
        if (index % 2 !== 0) {
            output.push(input[index]);
        }
    }
    output = output.map(el => 2 * el).reverse();

    console.log(output.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);