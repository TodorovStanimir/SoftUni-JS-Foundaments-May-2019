function zad2(input) {
    let numberLines = parseInt(input[0]);
    let pattern = /^([$%]{1})(?<tag>[A-Z][a-z]{3,})\1: (?<numbers>\[\d+\]\|\[\d+\]\|\[\d+\]\|)$/g;
    for (let number = 1; number <= numberLines; number++) {
        let line = input[number];
        if (line.match(pattern)) {
            let output = pattern.exec(line);
            let message = '';
            let tag = output.groups.tag;
            output.groups.numbers.split('|').forEach(num => {
                message += String.fromCharCode(num.substring(1, num.length - 1));
            })
            console.log(`${tag}: ${message}`)
        } else {
            console.log('Valid message not found!')
        }
    }
}
zad2(['4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|']);
zad2(['3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true']);
