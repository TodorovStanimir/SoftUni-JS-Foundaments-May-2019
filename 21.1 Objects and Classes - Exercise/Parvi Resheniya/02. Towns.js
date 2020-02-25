function towns(input) {
    let output = [];
    input.forEach(element => {
        let [name, latitude, longitude] = element.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let town = {
            town: name,
            latitude: latitude,
            longitude: longitude
        }
        output.push(town);
    });
    output.forEach(element => {
        console.log(element);
    })
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);