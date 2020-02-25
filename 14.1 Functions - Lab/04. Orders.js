function orders(product, quantity) {
    let price = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    }  
    let totalPrice = price[product] * quantity;
    console.log(totalPrice.toFixed(2));
}
orders('water', 5);
orders('coffee', 2);