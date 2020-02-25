function makeADictionary(input) {
    let arrayDictionary = [];
    for (let line of input) {
        let word = JSON.parse(line);
        let wordExist = false;
        let index = 0;
        for (let i = 0; i < arrayDictionary.length; i++) {           
            if (Object.entries(arrayDictionary[i])[0][0]===Object.entries(word)[0][0]) {
                wordExist = true;
                index = i;
            }
        }
        if (wordExist) {
            arrayDictionary[index] = word;
        } else {
            arrayDictionary.push(word);
        }
    }
    arrayDictionary.sort((a, b) => {
        return Object.entries(a)[0][0].localeCompare(Object.entries(b)[0][0])
    });

    for (let word of arrayDictionary) {
        let item = Object.entries(word);
        console.log(`Term: ${item[0][0]} => Definition: ${item[0][1]}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Tape":"."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);