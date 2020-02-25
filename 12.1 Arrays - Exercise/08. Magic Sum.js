function magicSum(array, givenNumber) {
    for (let i = 0; i < array.length; i++) {
        for (let y = i+1; y < array.length; y++) {
            if ((array[i] + array[y]) === givenNumber) {
                console.log(`${array[i]} ${array[y]}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);