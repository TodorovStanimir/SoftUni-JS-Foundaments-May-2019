function sumOfOddNumbers(nOddNumbers) {
    let sumOfOddNumbers = 0;
    let i = 1

    while (nOddNumbers >= 1) {
        console.log(i);
        sumOfOddNumbers += i;
        i += 2
        nOddNumbers--;
    }
    console.log(`Sum: ${sumOfOddNumbers}`)
}
sumOfOddNumbers(100)