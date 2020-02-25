function aMinerTask(input) {
    let resources = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!(resource in resources)) {
            resources[resource] = quantity;
        } else {
            resources[resource] += quantity;
        }
    }
    Object.entries(resources).forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])