function numberArray(input) {
    let listNumbers = input.shift().split(' ').map(Number);

    while ((line = input.shift()) !== 'End') {
        line = line.split(' ');
        let command = line[0];

        if (command === 'Switch') {
            let index = Number(line[1]);
            if (0 <= index && index < listNumbers.length) {
                listNumbers[index] = 0 - listNumbers[index];
            }

        } else if (command === 'Change') {
            let index = Number(line[1]);
            let givenValue = Number(line[2]);
            if (0 <= index && index < listNumbers.length) {
                listNumbers[index] = givenValue;
            }
        } else if (command === 'Sum') {
            let command2 = line[1];
            if (command2 === 'Negative') {
                let negativeNumbers = listNumbers.filter(element => element < 0);
                console.log(negativeNumbers.reduce((a, b) => a + b, 0));
            } else if (command2 === 'Positive') {
                let positiveNumbers = listNumbers.filter(element => element >= 0);
                console.log(positiveNumbers.reduce((a, b) => a + b, 0));
            } else if (command2 === 'All') {
                let allNumbers = listNumbers.slice(0);
                console.log(allNumbers.reduce((a, b) => a + b, 0));
            }
        }
    }
    let positiveNumbers = listNumbers.filter(element => element >= 0);
    console.log(positiveNumbers.join(' '));
}
numberArray(['1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End']);
numberArray(['1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End'
]);