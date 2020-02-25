houseParty = input => {
    let sheetGests = [];
    for (let line of input) {
        if (line.includes(' is not going!')) {
            let name = line.split(' is not going!')[0];
            if (sheetGests.includes(name)) {
                sheetGests=sheetGests.filter(gest => gest != name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            let name = line.split(' is going!')[0];
            if (sheetGests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                sheetGests.push(name);
            }
        }
    }
    console.log(sheetGests.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
])