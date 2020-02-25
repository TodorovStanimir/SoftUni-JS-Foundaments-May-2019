class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = Number(quality)
        this.isOn = false;
        this.price = Number(800-(this.info.age*2)+(this.quality*0.50));
    }
    turnOn() {
        this.isOn = true;
        this.quality--;
        this.price = Number(800-(this.info.age*2)+(this.quality*0.50));
    }
    turnOff() {
        this.isOn = false;
        this.quality--;
        this.price = Number(800-(this.info.age*2)+(this.quality*0.50));
    }
    showInfo () {
        return JSON.stringify(this.info);
    }
}

let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
