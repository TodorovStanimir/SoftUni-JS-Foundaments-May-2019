function printDNA(num) {
    let a = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let y = z = 0;
    let step = 1;
    for (let i = 0; i < num; i++) {
        console.log('*'.repeat(2 - y) + a[z][0] + '-'.repeat(2 * y) + a[z][1] + '*'.repeat(2 - y));
        y += step;
        z++;
        if (y === 2) {
            step = -1;
        }
        if (y === 0) {
            step = 1;
        }
        if (z === 5) {
            z = 0;
        }
    }
}
// printDNA(4);
printDNA(10);