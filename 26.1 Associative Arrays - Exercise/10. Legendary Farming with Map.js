function legendaryFarming(input) {
    let junk = new Map();
    let material = new Map();
    material.set('shards', 0);
    material.set('fragments', 0);
    material.set('motes', 0);
    let winsShadowmourne = false;
    let winsValanyr = false;
    let winsDragonwrath = false;

    let inputArr = input.split(' ');

    for (let i = 0; i < inputArr.length; i += 2) {
        let quantity = Number(inputArr[i]);
        let item = inputArr[i + 1].toLowerCase();
        if (item === 'shards') {
            if (material.get(item) + quantity >= 250) {
                winsShadowmourne = true;
                material.set(item, material.get(item) + quantity - 250);
                break;
            } else {
                material.set(item, material.get(item) + quantity);
            }
        } else if (item === 'fragments') {
            if (material.get(item) + quantity >= 250) {
                winsValanyr = true;
                material.set(item, material.get(item) + quantity - 250);
                break;
            } else {
                material.set(item, material.get(item) + quantity);
            }
        } else if (item === 'motes') {
            if (material.get(item) + quantity >= 250) {
                winsDragonwrath = true;
                material.set(item, material.get(item) + quantity - 250);
                break;
            } else {
                material.set(item, material.get(item) + quantity);
            }
        } else {
            if (!(junk.has(item))) {
                junk.set(item, quantity);
            } else {
                junk.set(item, junk.get(item) + quantity);
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
    [...material].sort((a, b) => {
        if (a[1] > b[1] || a[1] < b[1]) {
            return b[1] - a[1]
        } else {
            return a[0].localeCompare(b[0])
        }
    })
        .forEach(element => {
            console.log(`${element[0]}: ${element[1]}`);
        });

    [...junk]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(element => console.log(`${element[0]}: ${element[1]}`));
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')