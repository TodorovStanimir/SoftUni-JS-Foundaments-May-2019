hardWord = (input) => {
    let text = input[0];
    let words = input[1];

    let checkedstring = ''
    let checkedstringStarting = false;

    for (let char in text) {
        if (text[char] === '_') {
            checkedstringStarting = true;
            checkedstring += text[char]
        } else {
            checkedstringStarting = false;
        }
    
        if (!checkedstringStarting && checkedstring !== '') {
            for (let word of words) {
                if (checkedstring.length === word.length) {
                   text = text.replace('_'.repeat(word.length), word);
                   checkedstring='';
                   break;
                }
            }
        }
    }
    console.log(text);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])