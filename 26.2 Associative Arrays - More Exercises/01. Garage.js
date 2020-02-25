function garage(input) {
    let result = {};
    let orderedGarages = []
    input.forEach(line => {
        let [garage, tokens] = line.split(' - ');
        let car = [];
        tokens = tokens.split(', ')
        for (let element of tokens) {
            let [property, value] = element.split(': ');
            car.push(`${property} - ${value}`);
        }
        if (!result.hasOwnProperty(garage)) {
            result[garage] = [];
        }
        result[garage].push(car);
        if (!orderedGarages.includes(garage)) {
            orderedGarages.push(garage)
        }
    });
    let sortedGarages = [];
    orderedGarages.forEach(element => {
        Object.entries(result).forEach(garage => {
            if (garage[0] === element) {
                sortedGarages.push(garage)
            }
        })
    })
    sortedGarages.forEach((element) => {
        console.log(`Garage № ${element[0]}`);
        element[1].forEach(car => {
            console.log(`--- ${car.join(', ')}`)
        });
    });
}
garage(['2 - color: blue, fuel type: diesel', '2 - color: red, manufacture: Audi', '1 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])