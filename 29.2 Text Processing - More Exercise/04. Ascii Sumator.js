function asciiSumator([char1, char2, randomString]) {
    let asciiSum = 0;
    for (let char of randomString) {
        if (Math.min(char1.charCodeAt(), char2.charCodeAt()) < char.charCodeAt() && char.charCodeAt() < Math.max(char1.charCodeAt(), char2.charCodeAt())) {
            asciiSum += char.charCodeAt();
        }
    }
    
    console.log(asciiSum);
}
asciiSumator(['.', '@', 'dsg12gr5653feee5']);
asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);