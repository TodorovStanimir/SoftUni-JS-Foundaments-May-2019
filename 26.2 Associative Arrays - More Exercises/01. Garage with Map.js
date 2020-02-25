function garage(input) {
    let result = new Map();
    input.forEach(line => {
        let [garage, tokens] = line.split(' - ');
        let obj = [];
        tokens=tokens.split(', ')
        for (let element of tokens) {
            let [property, value] = element.split(': ');
            obj.push(`${property} - ${value}`);
        }
        if (result.has(garage)) {
            let currentStation = result.get(garage);
            currentStation.push(obj);
            result.set(garage, currentStation);
        } else {
            result.set(garage, [obj]);
        }
    });
    [...result].forEach((element) => {
        console.log(`Garage № ${element[0]}`);
        element[1].forEach(car => {
            console.log(`--- ${car.join(', ')}`)
        });
    });
}
garage(['2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
    '1 - fuel type: diesel, color: blue',
    '1 - color: red, manufacture: Audi'])