lettersChangeNumbers = (input) => {
    console.log(input
        .split(' ')
        .filter(word => word.length)
        .map(word => {
            let number = Number(word.substring(1, word.length - 1));

            ('A' <= word.substring(0, 1) && word.substring(0, 1) <= 'Z')
                ? number = number / (word.substring(0, 1).charCodeAt() - 64)
                : number = number * ((word.substring(0, 1).charCodeAt() - 96));
                
            ('a' <= word.substring(word.length - 1) && word.substring(word.length - 1) <= 'z')
                ? number += (word.substring(word.length - 1).charCodeAt() - 96)
                : number -= (word.substring(word.length - 1).charCodeAt() - 64);

            return number
        })
        .reduce((a, b) => (a + b), 0)
        .toFixed(2))
}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');