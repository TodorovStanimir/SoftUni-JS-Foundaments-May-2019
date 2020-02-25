function commonElement(array1, array2) {
    for (let itemArray1 of array1) {
        for (let itemArray2 of array2) {
            if (itemArray1 === itemArray2) {
                console.log(itemArray1);
                console.log();

            }
        }
    }
}
commonElement(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElement(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);