bunnyKill = (input) => {
    let coodinatesOfBomb = input.pop().split(' ');
    let hangarWithBunnies = [];
    input.forEach(element => {
        let line = element.split(' ').map(Number);
        hangarWithBunnies.push(line);
    });

    let powerOfKilledBunnies = 0;
    let killedBunnies = 0;
    for (let i = 0; i < coodinatesOfBomb.length; i++) {
        let [row, column] = coodinatesOfBomb[i].split(',').map(Number);
        let powerOfBunnyWithBomb = hangarWithBunnies[row][column];
        let startRow = Math.max(row - 1, 0);
        let finishRow = Math.min(hangarWithBunnies.length - 1, row + 1);
        let startColumn = Math.max(column - 1, 0);
        let finishColumn = Math.min(hangarWithBunnies[0].length - 1, column + 1);

        if (powerOfBunnyWithBomb !== 0) {
            powerOfKilledBunnies += powerOfBunnyWithBomb;
            killedBunnies++;
            hangarWithBunnies[row][column] = 0

            for (let row = startRow; row <= finishRow; row++) {
                for (let column = startColumn; column <= finishColumn; column++) {
                    if (hangarWithBunnies[row][column] <= powerOfBunnyWithBomb) {
                        hangarWithBunnies[row][column] = 0;
                    } else {
                        hangarWithBunnies[row][column] = hangarWithBunnies[row][column] - powerOfBunnyWithBomb;
                    }
                }
            }
        }
    }

    hangarWithBunnies.forEach(row => {
        row.forEach(column => {
            if (column > 0) {
                powerOfKilledBunnies += column;
                killedBunnies++;
            }
        });
    });
    console.log(powerOfKilledBunnies);
    console.log(killedBunnies);
}
bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);
bunnyKill(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'
])