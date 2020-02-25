function inventory(heros) {
    let sheetHeros = []
    for (let line of heros) {
        let [Hero, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ');
        hero = {
            Hero,
            level,
            items
        };
        sheetHeros.push(hero);
    }
    let output = [];

    sheetHeros.forEach(element => {
        output.push(Object.entries(element))
    });

    output.sort((a, b) => {
        if ((a)[1][1] > (b)[1][1] || (a)[1][1] < (b)[1][1]) {
            return (a)[1][1] - (b)[1][1]
        }
    });

    output.forEach(element => {
        element[2][1].sort((a, b) => {
            return a.localeCompare(b)
        });
    });

    output.forEach(element => {
        console.log(`${element[0][0]}: ${element[0][1]}`);
        console.log(`${element[1][0]} => ${element[1][1]}`);
        console.log(`${element[2][0]} => ${element[2][1].join(', ')}`);
    });
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);