function firstAndLastKNumbers(input) {
    let kNumbers = input[0];
    let firstKNumbers = input.slice(1, 1 + kNumbers)
    let lastKNumbers = input.slice(input.length - kNumbers, input.length)
    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);