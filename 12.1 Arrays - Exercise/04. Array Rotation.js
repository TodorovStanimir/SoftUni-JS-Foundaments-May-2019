function arrayRotation(array, numberRotation) {
    for (let i = 1; i <= numberRotation; i++) {
        let item = array.shift();
        array.push(item);
    }
    console.log(array.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)