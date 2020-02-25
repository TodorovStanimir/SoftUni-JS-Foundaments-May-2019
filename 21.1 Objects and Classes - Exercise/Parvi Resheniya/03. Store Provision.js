function storeProvision(input1, input2) {
    let currentStock = input1.slice();
    let orderdStock = input2.slice();

    let output = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        output[currentStock[i]] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderdStock.length; i += 2) {
        let product=orderdStock[i];
        if (output.hasOwnProperty(product)) {
            let key = orderdStock[i];
            let value = Number(orderdStock[i + 1]);
            output[key] += value;
        } else {
            output[orderdStock[i]] = Number(orderdStock[i + 1]);
        }
    }
    let result = Object.entries(output);

    for (let [product, quantity] of result) {
        console.log(`${product} -> ${quantity}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])