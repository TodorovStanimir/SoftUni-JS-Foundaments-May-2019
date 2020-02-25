function radioCrystal(input) {
    let targetThickness = input.shift();
    for (let i = 0; i < input.length; i++) {
        thickness = input[i];

        console.log(`Processing chunk ${thickness} microns`);

        if (thickness / 4 >= targetThickness) {
            let counter = 0
            while (thickness / 4 >= targetThickness) {
                counter++;
                thickness = thickness / 4;
            }
            console.log(`Cut x${counter}`);
            console.log('Transporting and washing');
            thickness = parseInt(thickness);
        }
        if (thickness - 0.2 * thickness >= targetThickness) {
            let counter = 0
            while ((thickness - 0.2 * thickness) >= targetThickness) {
                counter++;
                thickness -= 0.2 * thickness;
            }
            console.log(`Lap x${counter}`);
            console.log('Transporting and washing');
            thickness = parseInt(thickness);
        }
        if (thickness - 20 >= targetThickness) {
            let counter = 0
            while ((thickness - 20) >= targetThickness) {
                counter++;
                thickness -= 20;
            }
            console.log(`Grind x${counter}`);
            console.log('Transporting and washing');
            thickness = parseInt(thickness);
        }
        if (thickness - 2 >= targetThickness) {
            let counter = 0
            while ((thickness - 2) >= (targetThickness - 1)) {
                counter++;
                thickness -= 2;
            }
            console.log(`Etch x${counter}`);
            console.log('Transporting and washing');
            thickness = parseInt(thickness);
        }
        if (thickness + 1 === targetThickness) {
            thickness += 1;
            console.log('X-ray x1');
        }
        console.log(`Finished crystal ${thickness} microns`);
    }
}
radioCrystal([1000, 4000, 8100]);