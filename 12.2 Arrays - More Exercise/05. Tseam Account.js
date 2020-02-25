function tseamAccount(games) {
    let listOfGames = games.shift().split(' ');
    let currentOperation = games.shift();

    while (currentOperation !== 'Play!') {
        let [command, game] = currentOperation.split(' ');
        if (command === 'Install') {
            if (!listOfGames.includes(game)) {
                listOfGames.push(game);
            }
        } else if (command === 'Uninstall') {
            if (listOfGames.includes(game)) {
                listOfGames.splice(listOfGames.indexOf(game), 1);
            }
        } else if (command === 'Update') {
            if (listOfGames.includes(game)) {
                listOfGames.splice(listOfGames.indexOf(game), 1);
                listOfGames.push(game);
            }
        } else if (command === 'Expansion') {
            let [gameName, expansion] = game.split('-');
            if (listOfGames.includes(gameName)) {
                listOfGames.splice(listOfGames.indexOf(gameName) + 1, 0, `${gameName}:${expansion}`);
            }
        }
        currentOperation = games.shift();
    }
    console.log(listOfGames.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]);