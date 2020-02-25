function printDNA(num) {
    let repeatPo = 2;
    let repeatTire = 0;
    let triger = '-';
    let index = 0;
    let str = 'ATCGTTAGGG';
    for (let i = 1; i <= +num; i++) {
        console.log(`${'*'.repeat(repeatPo)}${str[index]}${'-'.repeat(repeatTire)}${str[index+1]}${'*'.repeat(repeatPo)}`);
        if (triger === '-') {
            repeatPo--;
            repeatTire += 2;
        } else {
            repeatPo++;
            repeatTire -= 2;
        }
        if (repeatPo === 0) {
            triger = '+';
        }
        if (repeatPo === 2) {
            triger = '-';
        }
        if (index === 8) {
            index = 0;
        } else {
            index += 2;
        }
    }
}
printDNA(4);
printDNA(10);