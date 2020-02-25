function catalogue(input) {
    input.sort((a, b) => a.localeCompare(b));
    let output = {};
    input.forEach(element => {
        let [product, price] = element.split(' : ');
        let group = product.substring(0, 1);
        if (!output.hasOwnProperty(group)) {
            output[group] = {}
        }
        output[group][product] = Number(price);
    });
    Object.entries(output).forEach(group => {
        console.log(group[0]);
        for (let [key, value] of Object.entries(group[1])) {
            console.log(`  ${key}: ${value}`)
        }
    });
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])