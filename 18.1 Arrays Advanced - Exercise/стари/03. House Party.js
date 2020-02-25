function houseParty(input) {
    let listOfGests = [];
    let currentOperation = input.shift();
    while (currentOperation != undefined) {
        let arrayOfOperation = currentOperation.split(' ');
        let nameOfGuest = arrayOfOperation[0];
        let operation = arrayOfOperation[2];
        if (operation === 'going!') {
            if (listOfGests.includes(nameOfGuest)) {
                console.log(`${nameOfGuest} is already in the list!`);
            } else {
                listOfGests.push(nameOfGuest);
            }
        } else {
            if (listOfGests.includes(nameOfGuest)) {
                listOfGests.splice(listOfGests.indexOf(nameOfGuest), 1);
            } else {
                console.log(`${nameOfGuest} is not in the list!`);
            }
        }
        currentOperation = input.shift();
    }
    console.log(listOfGests.join('\n'));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);
