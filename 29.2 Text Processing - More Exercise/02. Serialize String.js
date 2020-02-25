function serializeString(input) {
    let string = input[0];
    let result = [];
    
    for (let index in string) {
        let indexes = [];
        if (!(result.includes(string[index]))) {
            for (let i = index; i < string.length; i++) {
                if (string[index] === string[i]) {
                    indexes.push(i);
                }
            }
            result.push(string[index]);
            console.log(`${string[index]}:${indexes.join('/')}`);
        }
    }
}
serializeString(['abababa', '']);
serializeString(['avjavamsdmcalsdm', '']);