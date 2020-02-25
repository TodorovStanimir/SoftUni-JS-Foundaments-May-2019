function printAndSum(param1, param2) {
    let sumI = 0;
    let arrayI=[]
    for (let i = param1; i <= param2; i++) {
        arrayI.push(i);
        sumI += i;
    }
    console.log(arrayI.join(' '));
    console.log(`Sum: ${sumI}`);
}
printAndSum(5, 10);