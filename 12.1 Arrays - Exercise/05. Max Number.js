function maxNumber(input) {
    let output = [];
    for (let y = 0; y < input.length; y++) {
        let isBiggerThenOthers = true;
        for (let i = y+1; i < input.length; i++) {
            if (input[y] <= input[i]) {
                isBiggerThenOthers = false;
                break;
            }
        }
        if (isBiggerThenOthers) {
            output.push(input[y]);
        }
    }
    console.log(output.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48])