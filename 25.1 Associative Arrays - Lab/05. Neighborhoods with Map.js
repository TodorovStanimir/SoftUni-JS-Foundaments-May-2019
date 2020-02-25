function neighbrhoods(input) {
    let neighboorhoods = new Map();
    input.shift().split(', ').forEach(street => {
        neighboorhoods.set(street, []);
    });
    input.forEach(line => {
        let [street, name] = line.split(' - ');
        if (neighboorhoods.has(street)) {
            neighboorhoods.get(street).push(name);
        }
    });
    [...neighboorhoods]
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(street => {
            console.log(`${street[0]}: ${street[1].length}`);
            street[1].forEach(neighboor => console.log(`--${neighboor}`));
        });
}
neighbrhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);