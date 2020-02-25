function piccolo(input) {
    let carsInParking = new Map();
    input.forEach(element => {
        let [command, numberCar] = element.split(', ');
        if (command === 'IN') {
            if (!carsInParking.has(numberCar)) {
                carsInParking.set(numberCar, 'IN');
            }
        } else if (command === 'OUT') {
            if (carsInParking.has(numberCar)) {
                delete carsInParking.delete(numberCar);
            }
        }
    });

    ([...carsInParking].length === 0)
        ? console.log('Parking Lot is Empty')
        : [...carsInParking].sort((a, b) => a[0].localeCompare(b[0])).forEach(car => console.log(car[0]));
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])