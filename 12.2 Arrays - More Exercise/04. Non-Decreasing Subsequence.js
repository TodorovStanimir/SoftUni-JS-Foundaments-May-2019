function nonDecreasingSubsequence(input) {
    let output = [];
    let maxNumber = input[0];

    input.filter(x => {
        if (maxNumber <= x) {
            maxNumber = x;
            output.push(x);
        }
    });
    console.log(output.join(' '));
}
nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequence([1, 2, 3, 4]);
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);