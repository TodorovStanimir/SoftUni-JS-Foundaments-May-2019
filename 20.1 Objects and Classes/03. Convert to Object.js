function convertToObject(input) {
    Object.entries(JSON.parse(input)).forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')