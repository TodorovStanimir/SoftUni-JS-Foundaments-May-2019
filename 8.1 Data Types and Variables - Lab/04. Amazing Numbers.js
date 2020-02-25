function amazingNumbers(num) {
    let destrNum = num;
    let result = 0;

    while (destrNum > 0) {
        result += destrNum % 10;
        destrNum = Math.floor(destrNum / 10);
    }
    console.log(result.toString().includes('9') ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers(1233);
amazingNumbers(999);