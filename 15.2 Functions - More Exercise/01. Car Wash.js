function carWash(input) {
    let result = 0;
    for (let item of input) {
        switch (item) {
            case 'soap':
                result += 10;
                break;
            case 'water':
                result += 0.2 * result;
                break;
            case 'vacuum cleaner':
                    result += 0.25 * result;
                break;
            case 'mud':
                    result -= 0.1 * result;
                break;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);