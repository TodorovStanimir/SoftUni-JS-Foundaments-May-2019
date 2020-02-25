function partyTime(input) {
    let guests = {};
    guests.VIP = [];
    guests.regular = [];
    input.slice(0, input.indexOf('PARTY')).forEach((guest) => {
        (Number(guest[0]))
            ? guests.VIP.push(guest)
            : guests.regular.push(guest)
    });

    let cameGuests = input.slice(input.indexOf('PARTY') + 1, input.length);

    cameGuests.forEach(guest => {
        (Number(guest[0]))
            ? guests.VIP.splice(guests.VIP.indexOf(guest), 1)
            : guests.regular.splice(guests.regular.indexOf(guest), 1)
    });

    let result = Object.values(guests['VIP']).concat(Object.values(guests['regular']));
    console.log(result.length);
    result.forEach((guest) => console.log(guest));
}
partyTime(['9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '7IK9Yo0h',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
]);
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])