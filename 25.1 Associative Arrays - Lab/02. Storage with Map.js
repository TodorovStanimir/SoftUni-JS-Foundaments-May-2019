function storage(input) {
    let storedProducts = new Map();
    input.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        !(storedProducts.has(product))
            ? storedProducts.set(product, quantity)
            : storedProducts.set(product, +storedProducts.get(product)+quantity)
    });

    [...storedProducts].forEach(([product, quantity]) => console.log(`${product} -> ${quantity}`));
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);