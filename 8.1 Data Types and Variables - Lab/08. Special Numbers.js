function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let currentNum = i;
        let sum = 0
        while (currentNum > 0) {
            sum += currentNum % 10;
            currentNum = Math.floor(currentNum / 10);
        }
        console.log((sum === 5 || sum === 7 || sum === 11) ? `${i} -> True` : `${i} -> False`);
    }
}
specialNumbers(15);