function starEnigma(input) {
    let counter = Number(input.shift());
    let pattern = /[@]{1}(?<name>[a-z]+)[^@\-!:>]*[:]{1}(?<population>[0-9]+)[^@\-!:>]*[!]{1}(?<typeAttack>[A\|D])[!]{1}[^@\-!:>]*->(?<soldierCount>[0-9]+)/gi;
    let planets = {};
    planets['A'] = [];
    planets['D'] = [];

    for (let i = 1; i <= counter; i++) {
        let line = input.shift();
        let counterLattersSTAR = line
            .split('')
            .map(x => x.toLowerCase())
            .filter(x => (x === 's' || x === 't' || x === 'a' || x === 'r'))
            .length;
        let decriptedMessage = line.split('').map(elem => String.fromCharCode(elem.charCodeAt() - counterLattersSTAR)).join('')
        if (decriptedMessage.match(pattern)) {
            let currentPlanet = pattern.exec(decriptedMessage);
            planets[currentPlanet.groups['typeAttack']].push(currentPlanet.groups['name']);
        }
    }
    Object.entries(planets)
        .forEach((typeAttack) => {
            if (typeAttack[0] === 'A') {
                console.log(`Attacked planets: ${typeAttack[1].length}`);
            } else {
                console.log(`Destroyed planets: ${typeAttack[1].length}`);
            }
            typeAttack[1].sort((a, b) => a.localeCompare(b))
                .forEach(planet => console.log(`-> ${planet}`));
        });
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);

starEnigma(['3',
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);