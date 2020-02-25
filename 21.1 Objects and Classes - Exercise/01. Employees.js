function employess(input) {
    let listEmployess = {};
    input.forEach(employ => listEmployess[employ] = employ.length);

    for (let employ in listEmployess) {
        console.log(`Name: ${employ} -- Personal Number: ${listEmployess[employ]}`);
    }
}
employess([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);