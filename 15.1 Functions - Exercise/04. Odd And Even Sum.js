function oddAndEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;

    let str = num.toString().split('').map(Number);
    for (let index of str) {
        if (index % 2 != 0) {
            oddSum += index;
        } else {
            evenSum += index;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);