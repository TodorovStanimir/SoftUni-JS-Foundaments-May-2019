function oddOccurrences(input) {
    let output = new Map();
    output.set('oddTimes', []);
    input = input.split(' ').map(el => el = el.toLowerCase());

    input.forEach(word => {
        let counter = input.slice(0).filter(element => element === word).length
        if (counter % 2 !== 0 && !(output.get('oddTimes').includes(word))) {
            output.get('oddTimes').push(word);
        }
    });

    console.log(output.get('oddTimes').join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')