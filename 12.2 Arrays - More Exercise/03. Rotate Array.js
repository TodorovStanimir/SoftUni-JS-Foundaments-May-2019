function rotateArray(input) {
    let numberRotation = Number(input.pop());
    if (numberRotation >= 0) {
        for (let i = 1; i <= numberRotation; i++) {
            let currentElement = input.pop();
            input.unshift(currentElement);
        }
        console.log(input.join(' '));
    } else {
        console.log('Empty');
    }
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
rotateArray(['remove', 'remove', 'remove']);