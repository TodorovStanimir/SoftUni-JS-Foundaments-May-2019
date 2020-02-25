function wordTracker(input) {
    let words = new Map();
    input.shift()
        .split(' ')
        .forEach(word => {
            words.set(word, input.slice(0).filter(chekingWord => chekingWord === word).length)
        });

    [...words]
        .sort((a, b) => b[1] - a[1])
        .forEach(element => console.log(`${element[0]} - ${element[1]}`));
}
wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])