function towns(input) {
    let towns = [];
    input.forEach(line => {
        let [town, latitude, longitude] = line.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let currentTown = {
            town,
            latitude,
            longitude
        }
        towns.push(currentTown);
    });
    towns.forEach(town => console.log(town));
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);