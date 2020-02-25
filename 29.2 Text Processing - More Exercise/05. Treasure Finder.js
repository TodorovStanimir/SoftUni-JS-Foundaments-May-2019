function treasureFinder(inputLines) {
    let key = inputLines.shift().split(' ').map(Number);

    while ((line = inputLines.shift()) !== 'find') {
        let decreptedMessage = '';
        for (let index = 0; index < line.length; index++) {
            decreptedMessage += String.fromCharCode(line[index].charCodeAt() - key[index % key.length]);
        }
        let typeTreasure = decreptedMessage.substring(decreptedMessage.indexOf('&') + 1, decreptedMessage.lastIndexOf('&'))
        let coordinates = decreptedMessage.substring(decreptedMessage.lastIndexOf('<') + 1, decreptedMessage.lastIndexOf('>'))
        
        console.log(`Found ${typeTreasure} at ${coordinates}`);
    }
}
treasureFinder(['1 2 1 3',
    'ikegfp\'jpne)bv=41P83X@',
    'ujfufKt)Tkmyft\'duEprsfjqbvfv=53V55XA',
    'find']);
treasureFinder(['1 4 2 5 3 2 1',
    'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
    'tsojPqsf$(lrne\'$CYfqpshksdvfT$>634O57YC',
    '\'stj)>34W68Z@',
    'find']);