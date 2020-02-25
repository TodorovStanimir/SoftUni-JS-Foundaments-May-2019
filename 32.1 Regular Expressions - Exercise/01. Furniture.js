function furniture(input) {
    let pattern = /[>]{2}(?<name>.+)[<]{2}(?<price>[0-9]+|[0-9]+[.][0-9]+)[!]{1}(?<quantity>[0-9]+)/gi;
    let totalAmount = 0;
    console.log('Bought furniture:');
    while ((line = input.shift()) !== 'Purchase') {
        if (line.match(pattern)) {
            let currentFurnitures = pattern.exec(line);
            totalAmount += Number(currentFurnitures.groups.price) * Number(currentFurnitures.groups.quantity);
            console.log(currentFurnitures.groups.name)
        }
    }
    console.log(`Total money spend: ${totalAmount.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
