function airPollution(map, input) {
    let mapOfSofia = [];
    map.forEach(element => {
        mapOfSofia.push(element.split(' ').map(Number));
    });
    input.forEach(line => {
        let [command, value] = line.split(' ');
        value = Number(value)
        if (command === 'breeze') {
            let row = value;
            for (let column = 0; column < 5; column++) {
                mapOfSofia[row][column] = Math.max(0, mapOfSofia[row][column] - 15);
            }
        } else if (command === 'gale') {
            let column = value;
            for (let row = 0; row < 5; row++) {
                mapOfSofia[row][column] = Math.max(0, mapOfSofia[row][column] - 20);
            }
        } else if (command === 'smog') {
            for (let row = 0; row < 5; row++) {
                for (let column = 0; column < 5; column++) {
                    mapOfSofia[row][column] = mapOfSofia[row][column] + value;
                }
            }
        }
    });

    let output = [];
    for (let row = 0; row < 5; row++) {
        for (let column = 0; column < 5; column++) {
            if (mapOfSofia[row][column] >= 50) {
                output.push(`[${row}-${column}]`);
            }
        }
    }
    if (output.length === 0) {
        console.log('No polluted areas');
    } else {
        console.log(`Polluted areas: ${output.join(', ')}`);
    }
}
airPollution(
    ["5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24"
    ],
    ["breeze 1", "gale 2", "smog 25"]
)
airPollution(["5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24"
    ],
    ["smog 11", "gale 3", "breeze 1", "smog 2"]
)