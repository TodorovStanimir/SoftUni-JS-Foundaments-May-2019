function systemComponents(systems) {
    let systemsOutput = {};
    systems.forEach(system => {
        let [systemName, componentName, subcomponentName] = system.split(' | ')
        if (!(systemName in systemsOutput)) {
            systemsOutput[systemName] = {};
        }
        if (!(componentName in systemsOutput[systemName])) {
            systemsOutput[systemName][componentName] = [];
        }
        systemsOutput[systemName][componentName].push(subcomponentName);
    });

    systemsOutput = Object.entries(systemsOutput);
    systemsOutput.forEach(system => {
        system[1] = Object.entries(system[1])
    })
    sortSystems(systemsOutput);
    sortComponents(systemsOutput);

    function sortSystems() {
        systemsOutput.sort((a, b) => {
            if (a[1].length > b[1].length || a[1].length < b[1].length) {
                return b[1].length - a[1].length;
            } else {
                return a[0].localeCompare(b[0]);
            }
        });
    }

    function sortComponents() {
        systemsOutput.forEach(system => {
            system[1].sort((a, b) => {
                return b[1].length - a[1].length;
            });
        });
    }
    systemsOutput.forEach(system => {
        console.log(system[0]);
        system[1].forEach(component => {
            console.log(`|||${component[0]}`);
            component[1].forEach(subcomponent => {
                console.log(`||||||${subcomponent}`);
            });
        });
    });
}
systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])