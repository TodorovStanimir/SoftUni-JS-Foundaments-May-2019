function deciphering(input) {

    let encryptedString = input.shift();
    let decryptedString = '';
    let result = '';
    let isNotWrongBook = true;
    for (let char of encryptedString) {
        let charIndex = char.charCodeAt();
        if ((100 <= charIndex && charIndex <= 122) ||
            (123 <= charIndex && charIndex <= 125) ||
            charIndex === 35) {
            decryptedString += String.fromCharCode(charIndex - 3);
        } else {
            console.log('This is not the book you are looking for.');
            isNotWrongBook = false;
            break;
        }
    }

    if (isNotWrongBook) {
        let [substr1, substr2] = input.shift().split(' ');
        let regex = new RegExp(substr1, "g");
        result = decryptedString.replace(regex, substr2);
    }
    console.log(result);
}
deciphering(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw', 'ec an']);
deciphering(['arx#vkdww#qrw#sdvv', 't l']);