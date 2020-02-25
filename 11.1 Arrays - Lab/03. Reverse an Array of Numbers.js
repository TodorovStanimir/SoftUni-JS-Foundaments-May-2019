function reverseArrayOfNumbers(n, array) {
    let output = [];
    for (let i = 0; i < n; i++) {
output.unshift(array[i])
    }
    console.log(output.join(' ')); 
}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);