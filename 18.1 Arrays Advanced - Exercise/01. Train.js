function train (input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());

    while ((command = input.shift()) !== undefined) {
        if (command.includes('Add')) {
            let passengers = Number(command.split(' ')[1]);
            wagons.push(passengers);
        } else {
            let passengers = Number(command);
            for (let wagon in wagons) {
                if (wagons[wagon] + passengers <= maxCapacity) {
                    wagons[wagon] = wagons[wagon] + passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);