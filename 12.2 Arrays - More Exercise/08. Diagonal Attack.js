function diagonalAttack(strings) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let input = [];
    strings.forEach(element => {
        input.push(element.split(' ').map(Number));
    });

    for (let row = 0; row < input.length; row++) {
        for (let column = 0; column < input.length; column++) {
            if (row === column) {
                firstDiagonal += input[row][column];
            }
            if ((row + column + 1) === input.length) {
                secondDiagonal += input[row][column];
            }
        }
    }
    if (firstDiagonal === secondDiagonal) {
        for (let row = 0; row < input.length; row++) {
            for (let column = 0; column < input.length; column++) {
                if (row !== column && ((row + column + 1) !== input.length)) {
                    input[row][column] = secondDiagonal;
                }
            }
        }
    }
    input.forEach(element => {
        console.log(element.join(' '));

    });
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'
]);