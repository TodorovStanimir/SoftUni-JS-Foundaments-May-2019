function wrongResult(numOne, numTwo, numThree) {
    let result = '';
    if ((numOne > 0 && numTwo > 0 && numThree > 0) ||
        (numOne < 0 && numTwo < 0 && numThree > 0) ||
        (numOne < 0 && numTwo > 0 && numThree < 0) ||
        (numOne > 0 && numTwo < 0 && numThree < 0) ||
        numOne === 0 || numTwo === 0 || numThree === 0) {
        result = 'Positive';
    } else if ((numOne < 0 && numTwo < 0 && numThree < 0) ||
        (numOne < 0 && numTwo > 0 && numThree > 0) ||
        (numOne > 0 && numTwo < 0 && numThree > 0) ||
        (numOne > 0 && numTwo > 0 && numThree < 0)) {
        result = 'Negative';
    }
    console.log(result)
}
wrongResult(5, 12, -15);
wrongResult(-6, -12, 14);
wrongResult(-1, -2, -3);
wrongResult(-1, 0, 1);