function armies(input) {
    let leaders = {};

    input.forEach(line => {
        if (line.includes(' arrives')) {
            nameLeader = line.split(' arrives').filter(el => el !== '');
            leaders[nameLeader] = {};
        } else if (line.includes(': ')) {
            let [nameLeader, armyAndCount] = line.split(': ');
            let [army, count] = armyAndCount.split(', ');
            count = Number(count);
            if (nameLeader in leaders) {
                leaders[nameLeader][army] = count;
            }
        } else if (line.includes(' + ')) {
            let [army, count] = line.split(' + ');
            count = Number(count);
            for (let leader in leaders) {
                if (army in leaders[leader]) {
                    leaders[leader][army] += count;
                }
            }
        } else if (line.includes(' defeated')) {
            let leader = line.split(' defeated').filter(el => el !== '');
            if (leader in leaders) {
                delete leaders[leader];
            }
        }
    });
    Object.entries(leaders).sort((a, b) => {
        let totalArmy1 = Object.values(a[1]).reduce((a, b) => (a + b), 0);
        let totalArmy2 = Object.values(b[1]).reduce((a, b) => (a + b), 0);
        return totalArmy2 - totalArmy1
    })
        .forEach(leader => {
            console.log(`${leader[0]}: ${Object.values(leader[1]).reduce((a, b) => (a + b), 0)}`);
            Object.entries(leader[1])
                .sort((a, b) => b[1] - a[1])
                .forEach(army => console.log(`>>> ${army[0]} - ${army[1]}`));
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