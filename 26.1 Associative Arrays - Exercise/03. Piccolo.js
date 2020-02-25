function piccolo(input) {
    let carsInParking = {};
    input.forEach(element => {
        let [command, numberCar] = element.split(', ');
        if (command === 'IN') {
            if (!(numberCar in carsInParking)) {
                carsInParking[numberCar] = 'IN'
            }
        } else if (command === 'OUT') {
            if (numberCar in carsInParking) {
                delete carsInParking[numberCar];
            }
        }
    });

    (Object.keys(carsInParking).length===0)
    ? console.log('Parking Lot is Empty')
    : Object.keys(carsInParking).sort((a, b) => a.localeCompare(b)).forEach(car => console.log(car));
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