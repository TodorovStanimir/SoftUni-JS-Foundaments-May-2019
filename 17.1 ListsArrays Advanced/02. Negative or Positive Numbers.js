function nagetiveOrPositiveNumbers(input) {
    let output = [];
    input.forEach(element => {
        if (element >= 0) {
            output.push(element);
        } else {
            output.unshift(element);
        }
    });
    console.log(output.join('\n'));
}
nagetiveOrPositiveNumbers([7, -2, 8, 9]);
nagetiveOrPositiveNumbers([3, -2, 0, -1]);