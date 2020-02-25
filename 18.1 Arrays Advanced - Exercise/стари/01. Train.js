function train(input) {
    let numberOfPassengers = String(input.shift()).split(' ').map(Number);
    let maxNumberOfPassengersInOneWagon = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let operation = input[i].split(' ');
        if (operation[0] === 'Add') {
            let numberOfPassegnersInNewWagon = Number(operation[1]);
            numberOfPassengers.push(numberOfPassegnersInNewWagon);
        } else {
            let numberOfNewPassengers = Number(operation[0]);
            for (let currentWagon in numberOfPassengers) {
                if ((numberOfPassengers[currentWagon] + numberOfNewPassengers) <= maxNumberOfPassengersInOneWagon) {
                    let numberOfPassengerInCurrentWagon = numberOfPassengers[currentWagon] + numberOfNewPassengers;
                    numberOfPassengers.splice(currentWagon, 1, numberOfPassengerInCurrentWagon);
                    break;
                }
            }
        }
    }
    console.log(numberOfPassengers.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);