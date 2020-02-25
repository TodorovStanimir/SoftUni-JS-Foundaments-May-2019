arrayManipulator = (arr, arrstrings) => {
    let output = arr.slice();
    let command = '';
    while (command !== 'print') {

        let arrCommand = arrstrings.shift().split(' ');
        command = arrCommand.shift();
        arrCommand = arrCommand.map(Number);
        if (command === 'add') {
            let index = arrCommand.shift();
            let element = Number(arrCommand.shift());
            output.splice(index, 0, element);
        } else if (command === 'addMany') {
            let y = 0
            let index = Number(arrCommand.shift());
            for (let i = index; i < index + arrCommand.length ; i++) {
                output.splice(i, 0, Number(arrCommand[y]));
                y++;
            }
        } else if (command === 'contains') {
            let element = Number(arrCommand.shift());
            console.log(output.indexOf(element))
        } else if (command === 'remove') {
            let index = arrCommand.shift();
            output.splice(index, 1)
        } else if (command === 'shift') {
            let numberRotation = arrCommand.shift();
            for (let i = 0; i < numberRotation; i++) {
                let element = output.shift();
                output.push(element);
            }
        } else if (command === 'sumPairs') {
            let array = []
            for (let i = 0; i < output.length; i += 2) {
                let firstElement = output[i];
                let secondElement = 0;

                if (output[i + 1] !== undefined) {
                    secondElement = output[i + 1];
                }
                array.push(firstElement + secondElement);
            }
            output.splice(0, output.length);
            output = array.slice();
        }
    }
    console.log(output);
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);