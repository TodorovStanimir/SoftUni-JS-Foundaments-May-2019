function nNMatrix(num) {
    let output = [];
    for (let row = 0; row < num; row++) {
        let row = [];
        for (let column = 0; column < num; column++) {
            row.push(num);
        }
        output.push(row);
    }
    output.forEach(row => {
        console.log(row.join(' '));

    });
}
nNMatrix(3);
nNMatrix(7);
nNMatrix(2);