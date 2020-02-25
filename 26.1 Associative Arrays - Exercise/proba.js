function arenaTier(input) {
    let gladiators = new Map();
    while ((line = input.shift()) !== 'Ave Cesar') {
        if (!line.includes(' vs ')) {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);
            if (!gladiators.has(gladiator)) {
                gladiators.set(gladiator, [skill, [technique, skill]]);
            } else {
                let techniqueNotExist = true;
                let techniquesGladiator = gladiators.get(gladiator);
                for (let index = 1; index < techniquesGladiator.length; index++) {
                    if (techniquesGladiator[index][0] === technique) {
                        if (techniquesGladiator[index][1] < skill) {
                            techniquesGladiator[0] += skill - techniquesGladiator[index][1];
                            techniquesGladiator[index][1] = skill;
                            gladiators.set(gladiator, techniquesGladiator);
                            techniqueNotExist = false;
                            break;
                        }
                    }
                }
                if (techniqueNotExist) {
                    techniquesGladiator.push([technique, skill])
                    techniquesGladiator[0] += skill;
                    gladiators.set(gladiator, techniquesGladiator)
                }
            }
        } else {
            let [gladiator1, gladiator2] = line.split(' vs ');
            if (gladiators.has(gladiator1) && gladiators.has(gladiator2)) {
                let techniquesGladiator1 = gladiators.get(gladiator1);
                let techniquesGladiator2 = gladiators.get(gladiator2);
                for (let index1 = 1; index1 < techniquesGladiator1.length; index1++) {
                    let thereIsTheSameTechnique = false;
                    for (let index2 = 1; index2 < techniquesGladiator2.length; index2++) {
                        if (techniquesGladiator1[index1][0] === techniquesGladiator2[index2][0]) {
                            if (techniquesGladiator1[0] > techniquesGladiator2[0]) {
                                gladiators.delete(gladiator2);
                            } else {
                                gladiators.delete(gladiator1);
                            }
                            thereIsTheSameTechnique = true;
                            break;
                        }
                    }
                    if (thereIsTheSameTechnique) {
                        break;
                    }
                }
            }
        }
    }
    [...gladiators.entries()]
        .sort((a, b) => {
            if (b[1][0] > a[1][0] || b[1][0] < a[1][0]) {
                return b[1][0] - a[1][0];
            } else {
                return a[0].localeCompare(b[0]);
            }
        })
        .forEach(gladiator => {
            console.log(`${gladiator[0]}: ${gladiator[1][0]} skill`);
            gladiator[1].shift();
            gladiator[1]
                .sort((a, b) => a[0].localeCompare(b[0]))
                .sort((a, b) => b[1] - a[1])
                .forEach(a => console.log(`- ${a[0]} <!> ${a[1]}`));
        });
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Duck -> 250',
    'Ave Cesar'
])
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Shield -> 150',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
])