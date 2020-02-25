function reverseString(argument) {
    let result = ''
    for (let i = argument.length - 1; i >= 0; i--) {
        result += argument.charAt(i);
    }
    console.log(result);
}
reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');