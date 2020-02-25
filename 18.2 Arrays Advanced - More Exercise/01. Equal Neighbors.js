equalsNeighbors = array => {
    let output = 0;

    for (let i = 0; i < array.length; i++) {
        let counterI = 1
        if (i === array.length - 1) {
            counterI = -(array.length - 1)
        }
        for (let y = 0; y < array[i].length; y++) {
            let counterY = 1
            if (array[i][y] == array[i + counterI][y] && counterI === 1) {
                output++;
            }
            if (y === array[i].length - 1) {
                counterY = -(array[i].length - 1)
            }
            if (array[i][y] == array[i][y + counterY] && counterY === 1) {
                output++;
            }
        }
    }
    console.log(output);
}

equalsNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])
equalsNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
])