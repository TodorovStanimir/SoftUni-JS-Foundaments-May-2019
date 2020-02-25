function aMinerTask(input) {
    let resources = new Map();
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!resources.has(resource)) {
            resources.set(resource, quantity);
        } else {
            let currentQuantity = resources.get(resource);
            resources.set(resource, (currentQuantity + quantity));
        }
    }
    [...resources].forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}
aMinerTask([
    'Gold',
    '155',
    'Gold',
    '10',
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