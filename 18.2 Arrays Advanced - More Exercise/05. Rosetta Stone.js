function rosettaStone(input) {
    let n = input.shift();
    let template = [];
    let matrix = [];
    let decodingMatrix = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < n; i++) {
        template.push(input.shift().split(' ').map(Number));
    }
    let m = template[n - 1].length
    for (let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }
    let rowInTempalte = 0;
    let columnInTemplate = 0;
    for (let row = 0; row < matrix.length; row++) {
        let columnInTemplate = 0;
        for (let column = 0; column < matrix[row].length; column++) {
            matrix[row][column] = decodingMatrix[(matrix[row][column] + template[rowInTempalte][columnInTemplate]) % 27];
            if (columnInTemplate === m - 1) {
                columnInTemplate = 0;
            } else {
                columnInTemplate++;
            }
        }
        if (rowInTempalte === n - 1) {
            rowInTempalte = 0;
        } else {
            rowInTempalte++;
        }
    }
    let message = ''
    for (let i = 0; i < matrix.length; i++) {
        for (let y = 0; y < matrix[i].length; y++) {
            message+=matrix[i][y];
        }
    }
    console.log(message);
}
// rosettaStone([2,
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22'
// ])
// rosettaStone(['2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22'
// ])
rosettaStone([1,
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
])