function race(input) {
    let places = ['st', 'nd', 'rd'];
    let result = {};
    input.shift().split(', ').forEach(racer => result[racer] = 0);

    while ((line = input.shift()) !== 'end of race') {
        let nameRacer = line.match(/[a-z]/gi).join('');
        let distance = line.match(/[0-9]/g).map(Number).reduce((a, b) => a + b, 0);

        if (nameRacer in result) {
            result[nameRacer] += distance;
        }
    }
    
    Object.entries(result)
        .sort((a, b) => b[1] - a[1])
        .filter((a, index) => index <= 2)
        .forEach((racer, index) => console.log(`${index + 1}${places[index]} place: ${racer[0]}`));
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);