function cardGame(input) {
    let powerCard = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }
    let typeCard = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }
    let players = {};
    input.forEach(line => {
        let [player, cards] = line.split(': ');
        if (!(player in players)) {
            players[player] = []
        }
        cards.split(', ').forEach(card => {
            if (!players[player].includes(card)) {
                players[player].push(card);
            }
        });
    });
    Object.entries(players).forEach(player => {
        let totalScore = 0;
        player[1].forEach(card => {
            let arrayFromCard = card.split('');
            let type = arrayFromCard.pop();
            let power = arrayFromCard.join('');
            totalScore += powerCard[power] * typeCard[type];
        })
        console.log(`${player[0]}: ${totalScore}`);
    })
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
