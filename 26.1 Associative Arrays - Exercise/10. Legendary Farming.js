function legendaryFarming(input) {
    let junk = {};
    let material = {};
    material.Shards = 0;
    material.Fragments = 0;
    material.Motes = 0;
    let winsShadowmourne = false;
    let winsValanyr = false;
    let winsDragonwrath = false;

    let inputArr = input.split(' ');

    for (let i = 0; i < inputArr.length; i += 2) {
        let quantity = Number(inputArr[i]);
        let item = inputArr[i + 1];
        if (item.toLowerCase() === 'Shards'.toLowerCase()) {
            if (material.Shards + quantity >= 250) {
                winsShadowmourne = true;
                material.Shards += quantity - 250;
                break;
            } else {
                material.Shards += quantity;
            }
        } else if (item.toLowerCase() === 'Fragments'.toLowerCase()) {
            if (material.Fragments + quantity >= 250) {
                winsValanyr = true;
                material.Fragments += quantity - 250;
                break;
            } else {
                material.Fragments += quantity;
            }
        } else if (item.toLowerCase() === 'Motes'.toLowerCase()) {
            if (material.Motes + quantity >= 250) {
                winsDragonwrath = true;
                material.Motes += quantity - 250;
                break;
            } else {
                material.Motes += quantity;
            }
        } else {
            item = item.toLowerCase()
            if (!(item in junk)) {
                junk[item] = quantity;
            } else {
                junk[item] += quantity;
            }
        }

    }
    if (winsValanyr) {
        console.log('Valanyr obtained!');
    } else if (winsShadowmourne) {
        console.log('Shadowmourne obtained!');
    } else if (winsDragonwrath) {
        console.log('Dragonwrath obtained!');
    }
    Object.entries(material).sort((a, b) => {
        if (a[1] > b[1] || a[1] < b[1]) {
            return b[1] - a[1]
        } else {
            return a[0].localeCompare(b[0])
        }
    })
        .forEach(element => {
            console.log(`${element[0].toLowerCase()}: ${element[1]}`);

        });

    Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(element => console.log(`${element[0]}: ${element[1]}`));
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')