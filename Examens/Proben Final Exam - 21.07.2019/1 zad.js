function solve(input) {
    let result = '';
    while ((line = input.shift()) !== 'End') {
        let [command, string] = line.split(' ');
        if (command === 'Add') {
            result = result.concat(string);
        } else if (command === 'Print') {
            console.log(result);
        } else if (command === 'Upgrade') {
            result = result.replace(new RegExp(string, 'g'), String.fromCharCode(string.charCodeAt() + 1));
        } else if (command === 'Index') {
            let pattern = new RegExp(string, 'g');
            let indexes = '';
            result.replace(pattern, findIndexes)
            function findIndexes(match, offset) {
                offset > 0 ? indexes += ' ' + offset : indexes += offset;
            }
            console.log(indexes.length === 0 ? 'None' : indexes);
        } else if (command === 'Remove') {
            while (result.includes(string)) {
                result = result.replace(string, '');
            }
        }
    }
}
solve(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End']);

