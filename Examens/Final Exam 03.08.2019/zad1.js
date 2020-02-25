function zad1(input) {
    let string = String(input.shift());
    while ((line = input.shift()) !== 'End') {
        if (line.startsWith('Translate ')) {
            let [com, char, newChar] = line.split(' ');
            newChar = String(newChar);
            string = string.replace(new RegExp(char, 'g'), newChar);
            console.log(string);
        } else if (line.startsWith('Includes ')) {
            let newString = String(line.split(' ')[1]);
            if (string.includes(newString)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (line.startsWith('Start ')) {
            let newString = String(line.split(' ')[1]);
            if (string.startsWith(newString)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (line.startsWith('Lowercase')) {
            string = string.toLowerCase();
            console.log(string);
        } else if (line.startsWith('FindIndex ')) {
            let char = String(line.split(' ')[1]);
            if (string.includes(char)) {
                console.log(string.lastIndexOf(char));
            }
        } else if (line.startsWith('Remove ')) {
            let [com, startIndex, count] = line.split(' ');
            count = Number(count);
            startIndex = Number(startIndex);
            if (startIndex >= 0 && startIndex < string.length) {
                newString = string.substring(startIndex, startIndex + count);
                string = string.replace(newString, '');
                console.log(string);
            }
        }
    }
}
zad1(['//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End']
);

