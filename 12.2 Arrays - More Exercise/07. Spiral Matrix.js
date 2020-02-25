function spiralMatrix(n, m) {
    let num = n * m;
    let result = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let y = 0; y < n; y++) {
            row.push(0);
        }
        result.push(row);
    }
    let y = 0;
    let x = 0;
    let step = 0;
    for (let i = 0; i < num;) {
        while (y + step < n) {
            i++;
            result[x][y] = i;
            y++;
        }
        y--;
        x++;
        while (x + step < m) {
            i++;
            result[x][y] = i;
            x++;
        }
        x--;
        y--;
        while (y >= step) {
            i++;
            result[x][y] = i;
            y--;
        }
        y++;
        x--;
        step++;
        while (x >= step) {
            i++;
            result[x][y] = i;
            x--;
        }
        x++;
        y++;
    }
    for (let i = 0; i < m; i++) {
        console.log(result[i].join(' '));
    }
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);