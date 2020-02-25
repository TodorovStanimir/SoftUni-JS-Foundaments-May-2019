stringSubstring = (checkedWord, checkedText) => {
    checkedText = checkedText.toLowerCase().split(' ');
    isWordNotFound = true;

    for (let word of checkedText) {
        if (word === checkedWord.toLowerCase()) {
            isWordNotFound = false;
            break;
        }
    }
    console.log(isWordNotFound ? `${checkedWord} not found!` : checkedWord)
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');