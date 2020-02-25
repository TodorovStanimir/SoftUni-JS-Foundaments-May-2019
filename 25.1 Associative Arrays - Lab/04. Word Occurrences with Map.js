function wordOccurrences(input) {
    let uniqueWords = new Set(input);
    let output = new Map()
    uniqueWords.forEach((word) => {
        let counter = input.filter(element => element === word).length;
        output.set(word, counter);
    });
    [...output]
        .sort((a, b) => b[1] - a[1])
        .forEach(word => console.log(`${word[0]} -> ${word[1]} times`));
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])