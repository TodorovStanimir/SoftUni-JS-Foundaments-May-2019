function binaryToDecimal(argument) {
    let argumentInString = String(argument)
    let index = 0;
    let result = 0;
    for (let i = (argumentInString.length - 1); i >= 0; i--) {
        if (argumentInString.substr(index, 1) === '1') {
            result += Math.pow(2, i);
        }
        index++;
    }
    console.log(result);
}
binaryToDecimal('00001001');
binaryToDecimal(11110000);