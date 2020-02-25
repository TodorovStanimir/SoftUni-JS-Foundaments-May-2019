function valueOfAString([string, type]) {
    let totalSum = 0;
    let command = {
        UPPERCASE: {
            start: 65,
            finish: 90
        },
        LOWERCASE: {
            start: 97,
            finish: 122
        }
    }

    string.split('').forEach(char => {
        if (command[type].start <= char.charCodeAt() && char.charCodeAt() <= command[type].finish) {
            totalSum += char.charCodeAt()
        }
    })

    console.log(`The total sum is: ${totalSum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE', ''])
valueOfAString(['AC/DC', 'UPPERCASE', ''])