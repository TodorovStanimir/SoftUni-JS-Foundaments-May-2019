function oddOccurrences(input) {
    let output = {};

    input
        .split(' ')
        .map(el => el = el.toLowerCase())
        .forEach(word => {
            let counter = input.split(' ').map(el => el = el.toLowerCase()).slice(0).filter(element => element === word).length
            if (counter % 2 !== 0 && !(output.includes(word))) {
                output.push(word);
            }
        });

    console.log(output.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')