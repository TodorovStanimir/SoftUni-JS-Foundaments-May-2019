function contactList(input) {
    let contactsList = input.shift().split(' ');

    for (let line of input) {
        let tokkens = line.split(' ');
        let command = tokkens[0];

        if (command === 'Add') {
            let contact = tokkens[1];
            let indexContact = Number(tokkens[2]);
            if (!contactsList.includes(contact)) {
                contactsList.push(contact);
            } else {
                if (0 <= indexContact && indexContact < contactsList.length) {
                    contactsList.splice(indexContact, 0, contact);
                }
            }
        } else if (command === 'Remove') {
            let indexContact = Number(tokkens[1]);
            if (0 <= indexContact && indexContact < contactsList.length) {
                contactsList.splice(indexContact, 1);
            }
        } else if (command === 'Export') {
            let startIndex = Number(tokkens[1]);
            let count = Number(tokkens[2]);
            let exportedContacts = contactsList.slice(startIndex,startIndex+count);
            console.log(exportedContacts.join(' '));
        } else if (command === 'Print') {
            let kindOfPrint = tokkens[1];
            if (kindOfPrint === 'Normal') {
                console.log(`Contacts: ${contactsList.join(' ')}`);
            } else {
                console.log(`Contacts: ${contactsList.reverse().join(' ')}`);
            }
            break;
        }
    }
}
contactList(['Alisson Bellamy Candace Tristan',
    'Remove 3',
    'Add Bellamy 2',
    'Print Normal'
]);
contactList(['Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
])