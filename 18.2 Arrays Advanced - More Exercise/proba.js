class Storage {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product) {
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
        this.storage.push(product);
    }
    getProducts() {
        this.storage.forEach(element => console.log(JSON.stringify(element)));
    }
}


let productOne = {
    name: 'Cucamber',
    price: 1.50,
    quantity: 15
};
let productTwo = {
    name: 'Tomato',
    price: 0.90,
    quantity: 25
};
let productThree = {
    name: 'Bread',
    price: 1.10,
    quantity: 8
};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);






// function proba(input) {
//     class Cat {
//         constructor(name, age) {
//             this.name = name
//             this.age = age
//             this.says = () => {
//                 console.log(`${this.name}, age ${this.age} says Meow`);
//             }
//         }
//     }
//     let cats = [];
//     for (let i = 0; i < input.length; i++) {
//         let [name, age] = input[i].split(' ');
//         let cat = new Cat(name, age);
//         cats.push(cat);
//     }
//     for (cat of cats){
//         cat.says()
//     }
// }
// proba(['Mellow 2', 'Tom 5'])