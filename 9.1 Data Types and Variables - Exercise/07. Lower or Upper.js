function lowerOrUpper(char) {
    if ('A' <= char && char <= 'Z') {
        console.log('upper-case');
    } else if ('a' <= char && char <= 'z') {
        console.log('lower-case');
    }
}
lowerOrUpper('L');
lowerOrUpper('l');

function lowerOrUpper(char) {
    if (65 <= char.charCodeAt() && char.charCodeAt() <= 90) {
        console.log('upper-case');
    } else if (97<= char.charCodeAt() && char.charCodeAt() <= 122) {
        console.log('lower-case');
    }
}
lowerOrUpper('L');
lowerOrUpper('l');