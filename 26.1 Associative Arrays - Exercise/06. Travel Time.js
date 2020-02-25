function travelTime(input) {
    let countries = {};
    input.forEach(line => {
        let [country, town, price] = line.split(' > ');
        price = Number(price);
        if (!(country in countries)) {
            countries[country] = {};
            countries[country][town] = price
        } else if (!(town in countries[country])) {
            countries[country][town] = price;
        } else {
            if (countries[country][town] > price) {
                countries[country][town] = price;
            }
        }
    });
    let result = Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0]));

    result.forEach(line => {
        let arrayTowns = Object.entries(line[1])
            .sort((a, b) => a[1] - b[1])
            .map(town => `${town[0]} -> ${town[1]}`);
        console.log(`${line[0]} -> ${arrayTowns.join(' ')}`);
    })
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])