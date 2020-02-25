function rightPlace(string1, char, string2) {
    let string = string1.replace('_', char);
    if (string === string2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String')