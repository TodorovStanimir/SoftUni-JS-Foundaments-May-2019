function wordTracker(input) {
    let words = {};
    input.shift().split(' ').forEach(element => words[element] = 0);

    for (word in words) {
        words[word] = input.slice(0).filter(element => element === word).length;
    }
    Object.entries(words)
        .sort((a, b) => b[1] - a[1])
        .forEach(element => console.log(`${element[0]} - ${element[1]}`));
}
wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])