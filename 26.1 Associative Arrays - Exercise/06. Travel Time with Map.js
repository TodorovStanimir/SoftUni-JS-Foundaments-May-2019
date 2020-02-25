function travelTime(input) {
    let countries = new Map();
    input.forEach(line => {
        let [country, town, price] = line.split(' > ');
        price = Number(price);
        if (!(countries.has(country))) {
            countries.set(country, [{ [town]: price }]);
        } else {
            let townNotExist = true;
            countries.get(country).forEach((currentTown, index) => {
                if (Object.keys(currentTown)[0] === town) {
                    townNotExist = false;
                    if (Object.values(currentTown)[0] > price) {
                        countries.get(country).splice(index, 1, { [town]: price });
                    }
                }
            });
            if (townNotExist) {
                countries.get(country).push({ [town]: price });
            }
        }
    });
    let result = [...countries].sort((a, b) => a[0].localeCompare(b[0]));

    result.forEach(line => {
        let arrayTowns = line[1]
            .sort((a, b) => a.town - b.town)
            .map(town => `${Object.keys(town)[0]} -> ${Object.values(town)[0]}`);
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