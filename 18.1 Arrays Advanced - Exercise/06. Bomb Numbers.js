bombNumbers = (arr, numberAndPower) => {
    let output = arr;
    let number = numberAndPower[0];
    let power = numberAndPower[1];
    while (output.includes(number)) {
        let startIndex = 0;
        let finishedIndex = output.length - 1;
        let indexOfNumber = output.indexOf(number);
        if (indexOfNumber - power > 0) {
            startIndex = indexOfNumber - power;
        }
        if (indexOfNumber + power < output.length - 1) {
            finishedIndex = indexOfNumber + power;
        }
        output.splice(startIndex, finishedIndex - startIndex + 1);
    }
    console.log(output.reduce((a, b) => a + b, 0));

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);