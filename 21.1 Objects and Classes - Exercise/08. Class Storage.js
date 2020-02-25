class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;

    }
    addProduct(product) {
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
        this.storage.push(product);
    }
    getProducts() {
        let output = ''
        this.storage.forEach((product, index) => {
            if (index === this.storage.length - 1) {
                output += `${JSON.stringify(product)}`
            } else {
                output += `${JSON.stringify(product)}\n`
            }
        });
        return output;
    }
}
let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
