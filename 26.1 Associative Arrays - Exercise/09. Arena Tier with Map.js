function arenaTier(input) {
    let listGladiators = new Map();

    while ((line = input.shift()) !== 'Ave Cesar') {
        if (line.includes(' vs ')) {
            let [gladiator1, gladiator2] = line.split(' vs ');
            if (listGladiators.has(gladiator1) && listGladiators.has(gladiator2)) {
                let techniguesGladiator1 = listGladiators.get(gladiator1);
                let techniguesGladiator2 = listGladiators.get(gladiator2);
                for (let i = 1; i < techniguesGladiator1.length; i++) {
                    let existSameTechnique = false;
                    for (let y = 1; y < techniguesGladiator2.length; y++) {
                        if (Object.getOwnPropertyNames(techniguesGladiator1[i])[0] ===
                            Object.getOwnPropertyNames(techniguesGladiator2[y])[0]) {
                            if (listGladiators.get(gladiator1)[0] < listGladiators.get(gladiator2)[0]) {
                                listGladiators.delete(gladiator1);
                            } else {
                                listGladiators.delete(gladiator2);
                            }
                            existSameTechnique = true;
                            break;
                        }
                    }
                    if (existSameTechnique) {
                        break;
                    }
                }
            }
        } else {
            let [gladiator, technigue, skill] = line.split(' -> ');
            skill = Number(skill);
            if (!listGladiators.has(gladiator)) {
                listGladiators.set(gladiator, [skill, { [technigue]: skill }]);
            } else {
                let technigues = listGladiators.get(gladiator);
                let technigueNotExist = true;
                for (let i = 1; i < technigues.length; i++) {
                    let currentTechique = Object.keys(technigues[i])[0];
                    let currentSkill = technigues[i][currentTechique];
                    if (currentTechique === technigue) {
                        if (currentSkill < skill) {
                            technigues[0] += skill - currentSkill;
                            technigues[i][technigue] = skill;
                            listGladiators.set(gladiator, technigues)
                        }
                        technigueNotExist = false;
                        break;
                    }
                }
                if (technigueNotExist) {
                    listGladiators.get(gladiator)[0] += skill;
                    listGladiators.get(gladiator).push({ [technigue]: skill })
                }
            }
        }
    }
    [...listGladiators.entries()]
        .sort((a, b) => {
            if (a[1][0] > b[1][0] || a[1][0] < b[1][0]) {
                return b[1][0] - a[1][0];
            } else {
                return a[0].localeCompare(b[0]);
            }
        })
        .forEach((gladiator) => {
            console.log(`${gladiator[0]}: ${gladiator[1][0]} skill`);
            gladiator[1].shift();
            gladiator[1].sort((a, b) => {
                if (Object.values(a)[0] > Object.values(b)[0] || Object.values(a)[0] < Object.values(b)[0]) {
                    return Object.values(b)[0] - Object.values(a)[0]
                } else {
                    return Object.keys(a)[0].localeCompare(Object.keys(b)[0])
                }
            })
                .forEach(el => console.log(`- ${Object.keys(el)[0]} <!> ${Object.values(el)[0]}`));
        })
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);