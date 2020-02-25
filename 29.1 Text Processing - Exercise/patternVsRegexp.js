test = (text) => {
    let pattern = new RegExp("[_]{1,}", "g");
    let result1 = [];
    let result2 = [];
    
    while ((word = pattern.exec(text)) !== null) {
        result1.push(word[0]);
    }
    while ((word = new RegExp("[_]{1,}", "g").exec(text)) !== null) {
        if (result2.length <= result1.length) result2.push(word[0]); else break;
    }

    result1.forEach((word, index) => {
        console.log(`${word.length} vs ${result2[index].length}`)
    });
}
test('Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.')
// Result
// 4 vs 4
// 6 vs 4
// 7 vs 4
// 10 vs 4
// 8 vs 4
// 3 vs 4
// 5 vs 4