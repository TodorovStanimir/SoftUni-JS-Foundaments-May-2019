revealWords = (searchedWords, textWithTemplates) => {
    searchedWords
        .split(', ')
        .forEach(word => {
            textWithTemplates = textWithTemplates.replace('*'.repeat(word.length), word);
        });
    console.log(textWithTemplates);
}
revealWords('great', 'softuni is ***** place for learning new programming languages')
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')