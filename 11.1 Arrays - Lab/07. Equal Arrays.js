function equalArrays(array1, array2) {
    let sum = 0;
    let index = 0;
    let arraysAreIdentical = true;
    for (let i in array1) {
        if (array1[i] !== array2[i]) {
            arraysAreIdentical = false;
            index = i;
            break;
        }
        sum += Number(array1[i])
    }
    if (arraysAreIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);