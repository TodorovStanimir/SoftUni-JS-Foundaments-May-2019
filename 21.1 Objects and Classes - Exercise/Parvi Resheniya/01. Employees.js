function employees(input) {
    let sheetEmployers = {};
    input.forEach(employer => {
        let personalNum = Number(employer.length)
        sheetEmployers[employer] = personalNum;
    });

    for (let emploer in sheetEmployers) {
        console.log(`Name: ${emploer} -- Personal Number: ${sheetEmployers[emploer]}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])