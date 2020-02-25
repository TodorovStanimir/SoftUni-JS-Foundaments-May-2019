gladiatorrInventory = input => {
    let inventoriesPeter = input.shift().split(' ');
    for (let line of input) {
        let [command, equipment] = line.split(' ');
        switch (command) {
            case 'Buy':
                if (!inventoriesPeter.includes(equipment)) {
                    inventoriesPeter.push(equipment);
                }
                break;
            case 'Trash':
                if (inventoriesPeter.includes(equipment)) {
                    inventoriesPeter.splice(inventoriesPeter.indexOf(equipment), 1);
                }
                break;
            case 'Repair':
                if (inventoriesPeter.includes(equipment)) {
                    let inventory = inventoriesPeter.splice(inventoriesPeter.indexOf(equipment), 1);
                    inventoriesPeter.push(inventory);
                }
                break;
            case 'Upgrade':
                let inventory = equipment.split('-')[0];
                if (inventoriesPeter.includes(inventory)) {
                    equipment = equipment.replace('-', ':')
                    inventoriesPeter.splice(inventoriesPeter.indexOf(inventory) + 1, 0, equipment);
                }
                break;
        }
    }
    console.log(inventoriesPeter.join(' '));
}
gladiatorrInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
])
gladiatorrInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
])