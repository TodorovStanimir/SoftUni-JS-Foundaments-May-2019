function searchForANumber(array1, commands) {
    let numberOfElem = commands[0];
    let numberOfElemForDeleting = commands[1];
    let numberWeSearch = commands[2];
    let counterNumberWeSearch = 0;
    let result = array1
        .splice(0, numberOfElem)
        .splice(numberOfElemForDeleting, numberOfElem - numberOfElemForDeleting)
        .forEach(x => {
            if (x === numberWeSearch) {
                counterNumberWeSearch++;
            }
        });
    console.log(`Number ${numberWeSearch} occurs ${counterNumberWeSearch} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);