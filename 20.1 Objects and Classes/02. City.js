function city(name, area, population, country, postCode) {
    let city = {
        name,
        area,
        population,
        country,
        postCode
    }

    for (let key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000")