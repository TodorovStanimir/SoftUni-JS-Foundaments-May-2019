function storeProvision(stockInStore, orderedForDelivery) {
    let products = {};
    for (let i = 0; i < stockInStore.length; i += 2) {
        products[stockInStore[i]] = Number(stockInStore[i + 1])
    }
    for (let i = 0; i < orderedForDelivery.length; i += 2) {
        if (products.hasOwnProperty(orderedForDelivery[i])) {
            let newQuantity = products[orderedForDelivery[i]] + Number(orderedForDelivery[i + 1]);
            products[orderedForDelivery[i]] = newQuantity;
        } else {
            products[orderedForDelivery[i]] = Number(orderedForDelivery[i + 1]);
        }
    }
    for (let product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);