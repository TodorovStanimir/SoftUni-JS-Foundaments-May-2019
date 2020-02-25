function mergeArrays(input1, input2) {
    let output = [];

    for (let i in input1) {
        let currentNum;
        if (i % 2 === 0) {
            currentNum = Number(input1[i]) + Number(input2[i]);
        } else {
            currentNum = input1[i] + input2[i];
        }
        output[i] = currentNum;
    }
    console.log(output.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);