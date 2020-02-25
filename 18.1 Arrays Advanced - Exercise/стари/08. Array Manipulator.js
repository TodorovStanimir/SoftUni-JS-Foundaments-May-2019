function arrayManipulations(arrayOfNumbers, arrayOfComments) {

    let output=arrayOfNumbers.slice();
    let command='';
    while (command !== 'print') {
        let currentOperation = arrayOfComments.shift().split(' ');
        command=currentOperation.shift();
        currentOperation=currentOperation.map(Number);

        if (command==='add') {
            output.splice(currentOperation[0],0,currentOperation[1]);
        } else if (command==='addMany') {
            let y = 0;
            for (let i = currentOperation[0]; i < (currentOperation[0]+currentOperation.length-1); i++) {
                y++;
                output.splice(i, 0, currentOperation[y]);
            }

        } else if (command==='contains') {
            let isNotContainsOperation=true;
            for (let i=0;i<output.length;i++){
                if (output[i] === currentOperation[0]) {
                    console.log(i);
                    isNotContainsOperation=false;
                    break;
                }
            }
            if (isNotContainsOperation){
                console.log(-1);
            }

        } else if (command==='remove') {
            output.splice(currentOperation[0],1);
        } else if (command==='shift') {
            for (let i = 0; i < currentOperation[0]; i++) {
                let shiftElement = output.shift();
                output.push(shiftElement);
            }
        } else if (command==='sumPairs') {
            let temporaryOutput=[];
            for (let i=0;i<output.length;i+=2) {
                let a=output[i];
                let b=0;
                if (output[i+1]!==undefined){
                    b=output[i+1];
                }
                temporaryOutput.push(a + b);
            }
            output.splice(0, output.length);
            output=temporaryOutput.slice();
        }
    }
    console.log(output);
}

arrayManipulations([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulations([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);