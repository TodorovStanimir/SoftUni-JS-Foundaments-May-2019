function inventory(input) {
    let heros = [];
    input.forEach(line => {
        let [name, level, items] = line.split(' / ');
        if (name !== undefined && level !== undefined && items !== undefined) {
            level = Number(level);
            items = items.split(', ').sort((a, b) => a.localeCompare(b));
            hero = {
                name,
                level,
                items
            }
            heros.push(hero)
        }
    });
  heros.map(hero => Object.values(hero))
        .sort((a, b) => a[1] - b[1])
        .forEach(hero => {
            console.log(`Hero: ${hero[0]}`);
            console.log(`level => ${hero[1]}`);
            console.log(`items => ${hero[2].join(', ')}`);
        });
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])