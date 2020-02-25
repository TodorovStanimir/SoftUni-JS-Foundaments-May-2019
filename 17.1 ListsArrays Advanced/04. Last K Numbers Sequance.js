function lastKNumbersSequance(n, k) {
    let output = [1]
    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k)
        let currentIndex = output.slice(startIndex).reduce((a, b) => a + b);
        output.push(currentIndex)
    }
    console.log(output.join(' '));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);