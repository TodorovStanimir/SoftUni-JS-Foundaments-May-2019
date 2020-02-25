function cats(arr) {
    let cats=[]
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }
        meow  () {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let line of arr) {
        let [name, age] = line.split(' ')
        age = Number(age);
        cats.push(new Cat(name, age))
    }
    for (let cat of cats) {
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])