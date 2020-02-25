function armies(input) {
    let leaders = new Map();

    input.forEach(line => {
        if (line.includes(' arrives')) {
            nameLeader = line.split(' arrives').filter(el => el !== '')[0];
            leaders.set(nameLeader, []);
        } else if (line.includes(': ')) {
            let [nameLeader, armyAndCount] = line.split(': ');
            let [army, count] = armyAndCount.split(', ');
            count = Number(count);
            if (leaders.has(nameLeader)) {
                leaders.get(nameLeader).push({ [army]: count });
            }
        } else if (line.includes(' + ')) {
            let [army, count] = line.split(' + ');
            count = Number(count);
            for (let [leader, currArmy] of leaders) {
                isBreak = false;
                for (let index in currArmy) {
                    if (currArmy[index].hasOwnProperty(army)) {
                        count += currArmy[index][army];
                        currArmy.splice(index, 1, { [army]: count })
                        leaders.set(leader, currArmy);
                        isBreak = true;
                        break;
                    }
                }
                if (isBreak) {
                    break;
                }
            }
        } else if (line.includes(' defeated')) {
            let leader = line.split(' defeated').filter(el => el !== '')[0];
            if (leaders.has(leader)) {
                leaders.delete(leader);
            }
        }
    });
    [...leaders.entries()].sort((a, b) => {
        let totalArmy1 = a[1].map(element => Object.values(element)[0]).reduce((a, b) => (a + b), 0);
        let totalArmy2 = b[1].map(element => Object.values(element)[0]).reduce((a, b) => (a + b), 0);
        return totalArmy2 - totalArmy1
    })
        .forEach(leader => {
            console.log(`${leader[0]}: ${leader[1].map(element => Object.values(element)[0]).reduce((a, b) => (a + b), 0)}`);
            leader[1]
                .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
                .forEach(army => console.log(`>>> ${Object.keys(army)[0]} - ${Object.values(army)[0]}`));
        })
}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'])