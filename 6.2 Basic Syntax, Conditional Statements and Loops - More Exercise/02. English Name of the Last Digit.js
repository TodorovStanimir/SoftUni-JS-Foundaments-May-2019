function englishNameOfTheLastDigit(argument) {
    let num = parseInt(argument) % 10;
    let result = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    console.log(result[num]);
}
englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);