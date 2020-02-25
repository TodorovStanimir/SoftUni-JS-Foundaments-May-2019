function addAndRemove(commands) {
    let output = []
    for (let counter = 1; counter <= commands.length; counter++) {
        if (commands[counter - 1] === 'add') {
            output.push(counter);
        } else if (commands[counter - 1] === 'remove') {
            output.pop()
        }
    }
    console.log(output.length > 0 ? output.join(' ') : 'Empty')
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);