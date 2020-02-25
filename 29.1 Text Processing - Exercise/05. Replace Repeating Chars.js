replaceRepeatingChars = (string) => {
    console.log(string.split('').filter((char, ind) => char !== string.split('')[ind + 1]).join(''));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')