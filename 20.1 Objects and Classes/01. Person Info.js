function personInfo(firstName, lastName, age) {
    let object = {
        firstName,
        lastName,
        age
    }
    Object.entries(object).forEach(entry => console.log(`${entry[0]}: ${entry[1]}`));
}
personInfo("Peter", "Pan", "20");