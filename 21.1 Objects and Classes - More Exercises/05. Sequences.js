function sequences(input) {
    let output = []
    for (let i = 0; i < input.length; i++) {
        let isUnique = true;
        let sors = JSON.parse(input[i]).sort((a, b) => b - a);
        for (let y = 0; y < output.length; y++) {
            if (sors.join('').match(output[y].join(''))) {
                isUnique = false;
            }
        }
        if (isUnique) {
            output.push(sors)
        }
    }
    output = output.sort((a, b) => a.length - b.length);
    output.forEach(line => console.log(`[${line.join(', ')}]`));
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);