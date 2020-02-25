function distinctArray(inputArray) {
    let outputArray = [];

    for (currentIndex in inputArray) {
        if (!outputArray.includes(inputArray[currentIndex])){
            outputArray.push(inputArray[currentIndex]);
        }
    }
    console.log(outputArray.join(' '));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);