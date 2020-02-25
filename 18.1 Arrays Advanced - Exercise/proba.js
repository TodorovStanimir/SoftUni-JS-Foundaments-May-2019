function sorting(input) {
    let cloneInput = input.slice().sort((a, b) => a - b);
    let output=[];


    for (let i = 0; i < Math.ceil(input.length) / 2; i++) {
        let bigestElement = cloneInput.pop();
        let smallestElement = cloneInput.shift();
        output.push(bigestElement, smallestElement);
    }
    console.log(output.join('|'));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 15])