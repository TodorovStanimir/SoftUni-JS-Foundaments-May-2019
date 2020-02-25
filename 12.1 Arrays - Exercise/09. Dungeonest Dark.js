function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    input = String(input).split('|');
    let bestRoom = 0;
    let isPassAllRooms = true;

    for (let currentRoom of input) {
        bestRoom++;
        let [itemOrMonster, number] = currentRoom.split(' ');
        number = Number(number);
        if (itemOrMonster === 'potion') {
            if (health + number >= 100) {
                number = 100 - health;
                health = 100;
            } else {
                health += number;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            if (health - number > 0) {
                health -= number;
                console.log(`You slayed ${itemOrMonster}.`);

            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                isPassAllRooms = false;
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
    }
    if (isPassAllRooms) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
dungeonestDark('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')