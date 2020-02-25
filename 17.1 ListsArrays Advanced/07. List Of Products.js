function listOfProducts(input) {
    let sortedOutput = input.sort();
    for (let i = 0; i < sortedOutput.length; i++) {
        console.log(`${i+1}.${sortedOutput[i]}`);
    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);