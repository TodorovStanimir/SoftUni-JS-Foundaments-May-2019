function storage(input) {
    let storedProducts = {};
    input.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        !(product in storedProducts)
            ? storedProducts[product] = quantity
            : storedProducts[product] += quantity
    });

    Object.entries(storedProducts).forEach(([product, quantity]) => console.log(`${product} -> ${quantity}`));
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);