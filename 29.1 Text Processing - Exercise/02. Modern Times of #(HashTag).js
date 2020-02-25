modernTimesOfHashTag = (string) => {
    string
        .match(/#[a-z]+/gi)
        .forEach(word => console.log(word.substr(1)));
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')