function neighbrhoods(input) {
    let neighboorhoods = {};
    input.shift().split(', ').forEach(street => {
        neighboorhoods[street] = [];
    });
    input.forEach(line => {
        let [street, name] = line.split(' - ');
        if (Object.keys(neighboorhoods).includes(street)) {
            neighboorhoods[street].push(name);
        }
    });
    Object.entries(neighboorhoods)
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