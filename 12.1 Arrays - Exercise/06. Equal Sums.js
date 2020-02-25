function equalSums(input) {
    let leftSum = 0;
    let rightSum = 0;
    let leftSumequalRightSum = false;
    let index = 0
    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            leftSum += input[leftIndex];
        }
        for (let rightIndex = i + 1; rightIndex < input.length; rightIndex++) {
            rightSum += input[rightIndex];
        }
        if (leftSum === rightSum) {
            leftSumequalRightSum = true;
            index = i;
            break;
        }
    }
    if (leftSumequalRightSum) {
        console.log(index);
    } else {
        console.log('no');
    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);