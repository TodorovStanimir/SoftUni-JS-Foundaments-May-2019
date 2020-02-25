function buildAWall(input) {
    input = input.map(Number);
    let output = [];
    let counterDifference = [];
    let maxDifference = 0;
    let pesos=0;

    for (let i = 0; i < input.length; i++) {
        counterDifference.push(30 - input[i]);
        if (maxDifference < (30 - input[i])) {
            maxDifference=30-input[i];
        }
    }
    for (let y = 0; y <= maxDifference; y++) {
        let counterMilesPerDay = 0;
        for (let i = 0; i < counterDifference.length; i++) {
            if (counterDifference[i] > 0) {
                counterDifference[i]--;
                counterMilesPerDay++;
            }
        }
        if (counterMilesPerDay!==0) {
            output.push(counterMilesPerDay * 195);
            pesos += 1900 * output[y];
        }
    }
    console.log(output.join(', '));
    console.log(`${pesos} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);




