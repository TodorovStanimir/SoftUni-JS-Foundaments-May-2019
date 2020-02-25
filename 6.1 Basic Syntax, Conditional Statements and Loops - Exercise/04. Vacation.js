function vacation(goupOfPeople, typeOfGroup, DayOfWeek) {
    let prices = {
        students: {
            friday: 8.45,
            saturday: 9.80,
            sunday: 10.46
        },
        business: {
            friday: 10.90,
            saturday: 15.60,
            sunday: 16.00
        },
        regular: {
            friday: 15.00,
            saturday: 20.00,
            sunday: 22.50
        }
    }

    let pricePerPerson = prices[typeOfGroup.toLowerCase()][DayOfWeek.toLowerCase()];
    let totalPrice = pricePerPerson * goupOfPeople;

    
    if (typeOfGroup === 'Students' && goupOfPeople >= 30) {
        totalPrice -= 0.15 * totalPrice;
    }
    if (typeOfGroup === 'Business' && goupOfPeople >= 100) {
        totalPrice -= 10 * pricePerPerson;
    }
    if (typeOfGroup === 'Regular' && (10 <= goupOfPeople && goupOfPeople <= 20)) {
        totalPrice -= 0.05 * totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
);
vacation(40,
    "Regular",
    "Saturday"
);