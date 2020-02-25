function melrahShake([randomString, pattern]) {

    while (randomString.indexOf(pattern) !== randomString.lastIndexOf(pattern) &&
        randomString.indexOf(pattern) !== -1) {
        console.log('Shaked it.')
        let firstPart = randomString.substring(0, randomString.indexOf(pattern));
        let secondPart = randomString.substring(randomString.indexOf(pattern) + pattern.length, randomString.lastIndexOf(pattern));
        let thirdPart = randomString.substring(randomString.lastIndexOf(pattern) + pattern.length);

        randomString = firstPart + secondPart + thirdPart;
        pattern = pattern.substring(0, Math.floor(pattern.length / 2))
            .concat(pattern.substring(Math.floor(pattern.length / 2) + 1));
        if (pattern === '') {
            break;
        }
    }
    console.log('No shake.');
    console.log(randomString);
}
melrahShake(['astalavista baby', 'sta', '']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm', ''])