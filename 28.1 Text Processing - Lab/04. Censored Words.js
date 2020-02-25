sencoredWords = (text, word) => {
    let old;
    while (old!== text) {
        old = text
        text = text.replace(word, '*'.repeat(word.length))
    }
    console.log(text);
}
sencoredWords("A small sentence with some words", "small")