function bombNumbers(parameter, parameter2) {
    let bomb = parameter2[0];
    let power = parameter2[1];
    let index = 0;
    let start = 0;
    let finish = 0;
    let parameter1=parameter.slice();
    let output=0;

    while (parameter1.includes(bomb)){
        index = parameter1.indexOf(bomb);
        if (index - power > 0) {
            start = index - power;
        }
        if (index + power >= parameter1.length - 1) {
            finish = parameter1.length - start;
        } else {
            finish = 2 * power + 1;
        }
        parameter1.splice(start,finish);
    }
    for (let i=0;i<parameter1.length;i++){
        output+=parameter1[i];
    }
    console.log(output);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
