function jansNotation(input) {
    let operands = [];
    let notEnoughOperands = false
    while ((line = input.shift()) !== undefined) {
        if (line === '+' || line === '*' || line === '-' || line === '/') {
            let result = calculation(operands, line)
            if (result === false) {
                notEnoughOperands = true;
                break;
            } else {
                operands.splice(operands.length - 2, 2, result);
            }

        } else {
            if (Number(line) !== undefined) {
                operands.push(Number(line))
            }
        }
    }

    if (notEnoughOperands) {
        console.log('Error: not enough operands!');
    } else {
        if (operands.length > 1) {
            console.log('Error: too many operands!');
        } else {
            console.log(operands[0]);

        }
    }


    function calculation(arr, znak) {
        if (arr.length < 2) {
            return false;
        } else {
            let operand2 = arr[arr.length - 1];
            let operand1 = arr[arr.length - 2];
            switch (znak) {
                case '+':
                    return operand1 + operand2;
                    break;
                case '-':
                    return operand1 - operand2;
                    break;
                case '*':
                    return operand1 * operand2;
                    break;
                case '/':
                    return operand1 / operand2;
                    break;
            }
        }
    }

}
jansNotation([3,
    4,
    '+'
])
jansNotation([5,
    3,
    4,
    '*',
    '-'
])
jansNotation([7,
    33,
    8,
    '-'
])
jansNotation([15,
    '/'
])