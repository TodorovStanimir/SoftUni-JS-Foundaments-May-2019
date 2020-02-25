buildAWall = array => {
    let output = []
    let pesos = 0;
    array.forEach(element => {
        let x1 = element;
        let index = 0;
        while (x1 < 30) {
            if (output[index] === undefined) {
                output.push(195)
            } else {
                output[index] = output[index] + 195;
            }
            x1++;
            index++;
            pesos += 195 * 1900;
        }
    });
    console.log(output.join(', '));
    console.log(`${pesos} pesos`);
}
buildAWall([21, 25, 28]);