pasclaCaseSplitter = (string) => {
    let result = '';
    let currentWord = '';
    for (let index in string) {
        if ('A' <= string[index] && string[index] <= 'Z') {
            if (index !== '0') {
                result = result.concat(currentWord, ', ');
            }
            currentWord = '';
            currentWord = currentWord.concat(string[index]);
        } else {
            currentWord = currentWord.concat(string[index]);
        }
    }
    result = result.concat(currentWord);
    console.log(result);
}
pasclaCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pasclaCaseSplitter('HoldTheDoor');