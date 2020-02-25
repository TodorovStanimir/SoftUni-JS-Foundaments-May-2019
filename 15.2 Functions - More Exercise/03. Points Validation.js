function pointsValidation(input) {
    let [x1, y1, x2, y2] = [input[0], input[1], input[2], input[3]];

    isValidPoints(x1, y1, 0, 0);
    isValidPoints(x2, y2, 0, 0);
    isValidPoints(x1, y1, x2, y2);
    
    function isValidPoints (x1, y1, x2, y2)  {
        let distane = Math.sqrt(Math.abs(x2 - x1) * Math.abs(x2 - x1) + Math.abs(y2 - y1) * Math.abs(y2 - y1));
        if (distane === parseInt(distane)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);