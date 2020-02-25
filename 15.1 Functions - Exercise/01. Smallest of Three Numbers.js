function smallestOfThreeNumbers(num1, num2, num3) {
    let smallestNum = 0;
    if (num1 <= num2) {
        if (num1 <= num3) {
            smallestNum = num1;
        } else {
            smallestNum = num3;
        }
    } else if (num2 <= num3) {
        smallestNum = num2;
    } else {
        smallestNum = num3;
    }
    console.log(smallestNum);
}
smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(122, 122, 122);