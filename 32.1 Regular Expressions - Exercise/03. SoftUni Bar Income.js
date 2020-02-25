function softUniBarIncome(input) {
    let pattern = /%(?<name>[A-Z]{1}[a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*[|]{1}(?<count>[0-9]+)[|]{1}[^|$%.\d]*(?<price>[0-9.]+)[$]{1}/g;
    let totalIncome = 0;
    while ((line = input.shift()) !== 'end of shift') {
        if (line.match(pattern)) {
            let currentProduct = pattern.exec(line);
            let totalPrice = Number(currentProduct.groups['count']) * Number(currentProduct.groups['price'])
            totalIncome += totalPrice;
            console.log(`${currentProduct.groups['name']}: ${currentProduct.groups['product']} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);