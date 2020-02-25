function triplesOfLatin(input) {
    for (let d1 = 0; d1 < input; d1++) {
        for (let d2 = 0; d2 < input; d2++) {
            for (let d3 = 0; d3 < input; d3++) {
                console.log(`${String.fromCharCode(97+d1)}${String.fromCharCode(97+d2)}${String.fromCharCode(97+d3)}`);

            }
        }
    }
}
triplesOfLatin(3);