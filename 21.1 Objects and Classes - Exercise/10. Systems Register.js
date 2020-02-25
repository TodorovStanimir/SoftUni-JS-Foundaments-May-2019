function systemRegister(input) {
    let output = {};
    input.forEach(line => {
        let [system, component, subComponent] = line.split(' | ');
        if (!output.hasOwnProperty(system)) {
            output[system] = {};
            output[system][component] = [subComponent];
        } else {
            if (!output[system].hasOwnProperty(component)) {
                output[system][component] = [subComponent];
            } else {
                output[system][component].push(subComponent);
            }
        }
    });
    let sortedOutput = Object.entries(output);
    sortedOutput.forEach(element => element[1] = Object.entries(element[1]).sort((a, b) => b[1].length - a[1].length));

    sortedOutput.sort((a, b) => {
        if (a[1].length > b[1].length || a[1].length < b[1].length) {
            return b[1].length - a[1].length;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    sortedOutput.forEach(system => {
        console.log(system[0]);
        system[1].forEach(component => {
            console.log(`|||${component[0]}`);
            component[1].forEach(sybcomponent => console.log(`||||||${sybcomponent}`));
        })
    })
}
systemRegister(['SULS | Main Site | Home Page',
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
    'Indice | Session | Default Security'])