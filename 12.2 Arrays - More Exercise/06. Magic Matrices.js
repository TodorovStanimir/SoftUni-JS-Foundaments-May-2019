function magicMatrices(input) {
    let countColumns = input[0].length;
    let countRows = input.length;
    let output = [];
    for (let row = 0; row < countRows; row++) {
        let sum = 0;
        for (let column = 0; column < countColumns; column++) {
            sum += input[row][column];
        }
        output.push(sum);
    }
    for (let column = 0; column < countColumns; column++) {
        let sum = 0;
        for (let row = 0; row < countRows; row++) {
            sum += input[row][column];
        }
        output.push(sum);
    }
    let matrixISMagic = true;
    for (let i = 0; i < output.length - 1; i++) {
        if (output[i] !== output[i + 1]) {
            matrixISMagic = false;
            break;
        }
    }
    console.log(matrixISMagic);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
magicMatrices([
    [2, 16, 13, 3],
    [11, 5, 8, 10],
    [7, 9, 12, 6],
    [14, 4, 1, 15]
]);