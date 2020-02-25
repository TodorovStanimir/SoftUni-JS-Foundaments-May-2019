function arrayManipulations(input) {
    let output = input[0].split(' ').map(Number);
    for (let i = 1; i < input.length; i++) {
        let [operation, num1, num2] = input[i].split(' ');
        num1 = Number(num1);
        num2 = Number(num2);
        if (operation === 'Add') {
            output.push(num1);
        } else if (operation === 'Remove') {
            output = output.filter(a => a !== num1)
        } else if (operation === 'RemoveAt') {
            output.splice(num1, 1);
    } else if (operation === 'Insert') {
        output.splice(num2, 0, num1)
    }
}
console.log(output.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);